import TechnologyRepository from "../../../infrastructure/repositories/rate.repository";
import  DeleteTechnologyCommand  from "../../commands/rates/delete.rates.command";

class DeleteRateHandler {
    async execute(command: DeleteTechnologyCommand) {
        const technology = await TechnologyRepository.findOneById(command.getId());
        if (!technology) {
            throw new Error('Technology not found');
        }
        await TechnologyRepository.deleteById(command.getId());
    }
}

export default new DeleteRateHandler();