import { Request, Response } from 'express';
import CreateRateCommand from '../../../application/commands/rates/create.rates.command';
import createRateHandler from '../../../application/handlers/rates/create.rates.handler';

class CreateRateAction {
  async run(req: Request, res: Response) {
    const command: CreateRateCommand = new CreateRateCommand(
      req.body.technologyId,
      req.body.seniority,
      req.body.language,
      req.body.averageSalary,
      req.body.grossMargin,
      req.body.currency,
    );

    try {
      await createRateHandler.execute(command);
      return res.status(201).json({ message: 'Rate created' });
    } catch (error) {
      // @ts-ignore
      return res.status(400).json({ message: error.message });
    }

  }
}

export default new CreateRateAction();
