import { Request, Response } from "express";
import  UpdateRateHandler  from "../../../application/handlers/rates/update.rates.handler";
import UpdateRateCommand from "../../../../src/application/commands /rates/update.rates.command";

class UpdateUserAction {
    async run(req: Request, res: Response) {
        const command: UpdateRateCommand = new UpdateRateCommand(req.params.id, req.body.averageSalary, req.body.grossMargin);
        try {
            await UpdateRateHandler.execute(command);
        } catch (error) {
            // @ts-ignore
            return res.status(404).json({message: error.message});
        }

        return res.status(200).json({message: "User updated"});
    }
}

export default new UpdateUserAction();