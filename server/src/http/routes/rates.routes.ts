//import listUsersAction from "../actions/users/list.users.action";
import createRateAction from "../actions/create.rate.action";
import CommonRoutes from "./common.routes";
import { Application, Request, Response } from "express";

class RateRoutes extends CommonRoutes {
  constructor(app: Application) {
    super(app, 'Rates');
  }

  setUpRoutes(): Application {

    this.app.post('/rates', createRateAction.run);

    this.app.put('/rates/:id', (_req: Request, res: Response) => {
      return res.status(200);
    });

    this.app.delete('/rates/:id', (_req: Request, res: Response) => {
      return res.status(200);
    });

    this.app.get('/rates', (_req: Request, res: Response) => {
      return res.status(200);
    });

    return this.app;
  }
}

export default RateRoutes;
