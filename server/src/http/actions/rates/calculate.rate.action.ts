import { Request, Response } from "express";
import Rate from "../../../domain/entities/rates.entity";
import rateRepository from "../../../infrastructure/repositories/rate.repository";

class calculateRateAction{
            async run(req: Request, res: Response) {
                    let technology =req.body.technology
                    let seniority =req.body.seniority
                    let language =req.body.language
                    let currency =req.body.currency;

                    let rates= await rateRepository.findAllBy(technology,seniority,language,currency)
                    let response = rates.map((rate: Rate) => ({
                        technology_name: rate.getTechnology().getName(),
                        seniority: rate.getSeniority(),
                        language: rate.getLanguage(),
                        currency: rate.getCurrency()
                    }))

        return res.status(200).json({rates:response});
        }
}

export default new calculateRateAction