import { Request, Response } from "express";
import CreateRateCommand  from "../../../application/commands/rates/create.rates.command";
import createRateHandler from "../../../application/handlers/rates/create.rates.handler";

class CreateRateAction {
    async run(req: Request, res: Response) {
                const command: CreateRateCommand = new CreateRateCommand(
                    req.body.technology,
                    req.body.seniority,
                    req.body.lnguage,
                    req.body.grossMargin,
                    req.body.currency,
                    req.body.averageSalary,);
        
        await createRateHandler.execute(command);
        
        return res.status(201).json({message: "Rate created"});
    }
}

export default new CreateRateAction();