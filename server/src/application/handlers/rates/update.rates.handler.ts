import  Rate  from "../../../domain/entities/rates.entity";
import RatesRepository from "../../../infrastructure/repositories/rate.repository";
import UpdateRateCommand  from "../../../application/commands /rates/update.rates.command"

class UpdateRateHandler {
    async execute(command: UpdateRateCommand) {
        const rate: Rate | null  = await RatesRepository.findOneById(command.getId());

        if (!rate) {
            throw new Error('User not found');

        }
        rate.setAverageSalary(command.getAverageSalary());//solo estos dos
        rate.setGrossMargin(command.getGrossMargin());

        await RatesRepository.save(rate);
    }
}


export default new UpdateRateHandler()