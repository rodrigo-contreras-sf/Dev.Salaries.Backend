import  Rate  from "../../../domain/entities/rates.entity";
import { Seniority } from "../../../domain/enums/seniority.enum";
import { Language } from "../../../domain/enums/language.enum";
import RatesRepository from "../../../infrastructure/repositories/rate.repository";
//import { UpdateRateCommand } from "../../../application/commands /rates/create.rates.command";

class UpdateRateHandler {
    async execute(command: UpdateRateCommand) {
        const rate = await RatesRepository.findOneById(command.id);

        if (!rate) {
            throw new Error('User not found');
        }

        
        rate.technology = command.technology;
        rate.seniority = command.seniority as Seniority;
        rate.language = command.language as Language;
        rate.average_salary = command.average_salary;
        rate.gross_margin = command.gross_margin;
        rate.currency = command.currency;

        await RatesRepository.save(rate);
    }
}


export default new UpdateRateHandler();