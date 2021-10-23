import { Request, Response } from "express";
import Rate from "../../../domain/entities/rates.entity";
import { Language } from "../../../domain/enums/language.enum";
import { Seniority } from "../../../domain/enums/seniority.enum";
import rateRepository from "../../../infrastructure/repositories/rate.repository";

class calculateRateAction{
            async run(req: Request, res: Response) {
                //const command: CreateRateCommand = new CreateRateCommand(
                    var technology =req.body.technology
                    var seniority =req.body.seniority
                    var language =req.body.language
                    var currency =req.body.currency;

                    let rates= new rateRepository.findOneById(
                        technology: String[],
                        seniority: Seniority,
                        language: Language,
                        currency: String,
                    )
//rate: { getTechnology: () => { (): any; new(): any; getName: { (): any; new(): any; }; }; getSeniority: () => any; getLanguage: () => any; getCurrency: () => any; }) => ({
                    rates = rates.map(rate => ({
                        technology_name: rate.getTechnology().getName(),
                        seniority: rate.getSeniority(),
                        language: rate.getLanguage(),
                        currency: rate.getCurrency()
                    })) 

        return res.status(200).json({rates});
        }
}
export default new calculateRateAction