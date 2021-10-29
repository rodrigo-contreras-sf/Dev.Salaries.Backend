import { Request, Response } from "express";
import  Technology  from "../../../../src/domain/entities/technology.entity";
import TechnologyRepository from "../../../infrastructure/repositories/technology.repository";

class ListTechnologyAction {
    async run(_req: Request, res: Response) {
       const rates: Technology[] = await TechnologyRepository.findAll();
       
       return res.status(200).json(rates);
    }
}

export default new ListTechnologyAction();