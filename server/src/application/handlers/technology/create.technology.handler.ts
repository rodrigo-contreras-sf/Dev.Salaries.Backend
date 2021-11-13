import TechnologyRepository from '../../../infrastructure/repositories/technology.repository';
import CreateTechnologyCommand from '../../commands/technology/create.technology.command';
import Technology from '../../../domain/entities/technology.entity';

class CreateTechnologyHandler {
  async execute(command: CreateTechnologyCommand) {
    if (await TechnologyRepository.exist(command.getName())) {
      throw new Error('Technology not created');
    }

    const technology: Technology = new Technology(command.getName());
    await TechnologyRepository.save(technology);
  }
}

export default new CreateTechnologyHandler();
