import Rate from "../../../domain/entities/rates.entity";
import RatesRepository from "../../../infrastructure/repositories/rate.repository";
import TechnologyRepository from "../../../infrastructure/repositories/technology.repository";
import CreateRateCommand  from "../../../application/commands/rates/create.rates.command";
import Technology from "../../../domain/entities/technology.entity";

class CreateRateHandler {
    async execute(command: CreateRateCommand) {

        const technology: Technology | null  = await TechnologyRepository.findOneById(command.getTechnology());
        
        if(!technology){
            throw new Error
        }

        if(await RatesRepository.exist(command.getTechnology(),
            command.getSeniority(),
            command.getLanguage(),
            command.getCurrency())){
            
                throw new Error ("res.status(404).json({message: Error.message})?");
        }

        const rate: Rate = new Rate( 
            command.getTechnology(),
            command.getSeniority(),
            command.getLanguage(),
            command.getAverageSalary(),
            command.getGrossMargin(), 
            command.getCurrency(),
            );
        await RatesRepository.save(rate);
    }
}

export default new CreateRateHandler();