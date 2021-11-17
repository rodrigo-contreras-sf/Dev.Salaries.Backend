import { Request, Response} from "express";
import  DeleteRateCommand  from "../../../application/commands/rates/delete.rates.command";
import DeleteRateHandler from "../../../application/handlers/rates/delete.rates.handler";

class DeleteUserAction {
    async run(req: Request, res: Response) {
        const command: DeleteRateCommand = new DeleteRateCommand(req.params.id);

        try {
            await DeleteRateHandler.execute(command);
            return res.status(201).json({message: "Rate deleted"});
        } catch (error) {
            // @ts-ignore
            return res.status(404).json({message: error.message});
        }

        //return res.status(204).send();
        
    }
}

export default new DeleteUserAction();