import TechnologyRepository from "../../../infrastructure/repositories/technology.repository";
import UpdateTechnologyCommand  from "../../commands/technology/update.technology.command";
import Technology from "../../../domain/entities/technology.entity";

class UpdateTechnologyHandler {
    async execute(command: UpdateTechnologyCommand) {
        const technology: Technology | null  = await TechnologyRepository.findOneById(command.getId());

        if (!technology) {
            throw new Error('Technology not found');
        }
        technology.setName(command.getName());

        await TechnologyRepository.save(technology);
    }
}

export default new UpdateTechnologyHandler();