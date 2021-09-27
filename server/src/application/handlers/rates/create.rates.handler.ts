import  Rate  from "../../../domain/entities/rates.entity";
import { Seniority } from "../../../domain/enums/seniority.enum";
import { Language } from "../../../domain/enums/language.enum";
//import rateRepository from "../../../infrastructure/repositories/user.repository";
import { CreateRateCommand } from "../../commands/rates/create.rates.command";

class CreateRateHandler {
    async execute(command: CreateRateCommand) {
        const rate: Rate = new Rate( 
            command.technology,
            command.seniority as Seniority,
            command.language as Language,
            command.average_salary,
            command.gross_margin, 
            command.currency,
            );
            
        //await rateRepository.save(rate);
    }
}

export default new CreateRateHandler();