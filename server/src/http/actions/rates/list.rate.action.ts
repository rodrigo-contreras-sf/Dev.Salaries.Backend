import { Request, Response } from "express";
import  Rate  from "../../../../src/domain/entities/rates.entity";
import RateRepository from "../../../infrastructure/repositories/rate.repository";

class ListRatesAction {
    async run(_req: Request, res: Response) {
       const rates: Rate[] = await RateRepository.findAll();
       
       return res.status(200).json(rates);
    }
}

export default new ListRatesAction();