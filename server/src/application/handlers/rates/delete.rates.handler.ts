import RatesRepository from "../../../infrastructure/repositories/rate.repository";
import DeleteRateCommand  from "../../commands/rates/delete.rates.command";
class DeleteRateHandler {
    async execute(command: DeleteRateCommand) {
        const rates = await RatesRepository.findOneById(command.getId());
        if (!rates) {
            throw new Error('Rate not found');
        }
        await RatesRepository.deleteById(command.getId());
    }
}
export default new DeleteRateHandler();