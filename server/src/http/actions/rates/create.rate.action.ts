import { Request, Response } from 'express';
import CreateRateCommand from '../../../application/commands/rates/create.rates.command';
import createRateHandler from '../../../application/handlers/rates/create.rates.handler';

class CreateRateAction {
  async run(req: Request, res: Response) {
    const command: CreateRateCommand = new CreateRateCommand(
      req.body.technology_id,
      req.body.seniority,
      req.body.language,
      req.body.average_salary_in_cents,
      req.body.gross_margin_in_cents,
      req.body.currency,
    );

    await createRateHandler.execute(command);

    return res.status(201).json({ message: 'Rate created' });
  }
}

export default new CreateRateAction();
