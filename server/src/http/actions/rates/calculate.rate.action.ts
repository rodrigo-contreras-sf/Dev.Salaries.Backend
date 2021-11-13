import { Request, Response } from 'express';
import rateRepository from '../../../infrastructure/repositories/rate.repository';

class calculateRateAction {
  async run(req: Request, res: Response) {
    let technologyIds = req.body.technology_ids;
    let seniority = req.body.seniority;
    let language = req.body.language;
    let currency = req.body.currency;

    let rates = await rateRepository.findAllBy(technologyIds, seniority, language, currency);

    return res.status(200).json({ rates: rates });
  }
}

export default new calculateRateAction();
