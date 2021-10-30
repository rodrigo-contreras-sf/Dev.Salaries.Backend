import { Request, Response } from "express";
import  UpdateTechnologyHandler  from "../../../application/handlers/technology/update.technology.handler";
import UpdateTechnologyCommand from "../../../application/commands /technology/update.technology.command";

class UpdateTechnologyAction {
    async run(req: Request, res: Response) {
        const command: UpdateTechnologyCommand = new UpdateTechnologyCommand(req.params.id, req.body.name);
        try {
            await UpdateTechnologyHandler.execute(command);
        } catch (error) {
            // @ts-ignore
            return res.status(404).json({message: error.message});
        }
        return res.status(200).json({message: "Technology updated"});
    }
}
export default new UpdateTechnologyAction();