import { Request, Response } from "express";
import { CreateRateCommand } from "../../application/commands /rates/create.rates.command";
import createRateHandler from "../../application/handlers/rates/create.rates.handler";

class CreateRateAction {
    async run(req: Request, res: Response) {
        const command: CreateRateCommand = req.body;
    
        if (!command.email || !command.password) {
            return res.status(400).json({message: "Email or password missing"});
        }
        
        await createRateHandler.execute(command);
        
        return res.status(201).json({message: "Rate created"});
    }
}

export default new CreateRateAction();