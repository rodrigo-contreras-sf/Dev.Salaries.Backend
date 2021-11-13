import TechnologyRepository from '../../../infrastructure/repositories/technology.repository';
import DeleteTechnologyCommand from '../../commands/technology/delete.technology.command';

class DeleteTechnologyHandler {
  async execute(command: DeleteTechnologyCommand) {
    const technology = await TechnologyRepository.findOneById(command.getId());
    if (!technology) {
      throw new Error('Technology not found');
    }
    await TechnologyRepository.deleteById(command.getId());
  }
}

export default new DeleteTechnologyHandler();
