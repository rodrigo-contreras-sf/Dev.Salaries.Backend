import TechnologyRepository from "../../../infrastructure/repositories/technology.repository";
import CreateTechnologyCommand from "../../commands/technology/create.technology.command";
import Technology from "../../../domain/entities/technology.entity";
import Rate from "../../../domain/entities/rates.entity";
import RatesRepository from "../../../infrastructure/repositories/rate.repository";

class CreateTechnologyHandler {
    async execute(command: CreateTechnologyCommand) {

        const rates: Rate | null  = await RatesRepository.findOneById(command.getName());
        
        if(!rates){
            throw new Error
        }

        if(await TechnologyRepository.exist(command.getName()
        )){
            
            throw new Error ("Technology not created");
        }

        const technology: Technology = new Technology(command.getName());
        await TechnologyRepository.save(technology);
    }
}

export default new CreateTechnologyHandler();