//import { User } from "../../../domain/entities/user.entity";
//import userRepository from "../../../infrastructure/repositories/user.repository";
//import { CreateUserCommand } from "../../commands/users/create.user.command";

class CreateRateHandler {
    async execute(command: CreateRateCommand) {
        const rate: Rate = {
            idtechnology: command.idtechnology,
            nametechnology: command.nametechnology,
        };
        
        await rateRepository.save(rate);
    }
}

export default new CreateRateHandler();