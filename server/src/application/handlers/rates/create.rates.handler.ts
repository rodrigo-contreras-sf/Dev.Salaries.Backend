import { Rate } from "../../../domain/entities/rates.entity";
//import rateRepository from "../../../infrastructure/repositories/user.repository";
import { CreateRateCommand } from "../../commands /rates/create.rates.command";

class CreateRateHandler {
    async execute(command: CreateRateCommand) {
        const rate: Rate = {
            id: command.id,
            technology_id: command.technology_id,
            
        };
        
        await rateRepository.save(rate);
    }
}

export default new CreateRateHandler();