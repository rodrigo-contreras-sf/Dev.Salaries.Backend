import  Rate  from "../../../domain/entities/rates.entity";
//import { Seniority } from "../../../domain/enums/seniority.enum";
//import { Language } from "../../../domain/enums/language.enum";
import RatesRepository from "../../../infrastructure/repositories/rate.repository";
import UpdateRateCommand  from "../../../application/commands/rates/update.rates.command"

class UpdateRateHandler {
    async execute(command: UpdateRateCommand) {
        const rate: Rate | null  = await RatesRepository.findOneById(command.getId());

        if (!rate) {
            throw new Error('User not found');

        }
       // rate.technology = command.technology;
        //rate.seniority = command.seniority as Seniority;
        //rate.language = command.language as Language;
        rate.setAverageSalary(command.getAverageSalary());//solo estos dos
        rate.setGrossMargin(command.getGrossMargin());
        //rate.currency = command.currency;

        await RatesRepository.save(rate);
    }
}

export default new UpdateRateHandler()