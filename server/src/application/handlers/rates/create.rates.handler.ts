import  Rate  from "../../../domain/entities/rates.entity";
import { Seniority } from "../../../domain/enums/seniority.enum";
import { Language } from "../../../domain/enums/language.enum";
import RatesRepository from "../../../infrastructure/repositories/rate.repository";
import  CreateRateCommand  from "../../../application/commands /rates/create.rates.command";

class CreateRateHandler {
    async execute(command: CreateRateCommand) {
        const rate: Rate = new Rate( 
            command.technology,
            command.seniority as Seniority,
            command.language as Language,
            command.averageSalary,
            command.grossMargin, 
             command.currency,
             );
            
        await RatesRepository.save(rate);
    }
}

export default new CreateRateHandler();