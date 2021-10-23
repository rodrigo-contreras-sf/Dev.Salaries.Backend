//import listUsersAction from "../actions/users/list.users.action";
import createRateAction from "../../http/actions/rates/create.rate.action";
import CommonRoutes from "./common.routes";
import { Application, } from "express";//Request, Response
import deleteRateAction from "../actions/rates/delete.rate.action";
import updateRateAction from "../actions/rates/update.rate.action";
import listRateAction from "../actions/rates/list.rate.action";
import calculateRateAction from "../actions/rates/calculate.rate.action";

class RateRoutes extends CommonRoutes {
  constructor(app: Application) {
    super(app, 'Rates');
  }

  setUpRoutes(): Application {

    this.app.post('/rates', createRateAction.run);

    this.app.put('/rates/:id', updateRateAction.run);

    this.app.delete('/rates/:id', deleteRateAction.run);

    this.app.get('/rates', listRateAction.run);

    this.app.post('/rates/calculate', calculateRateAction.run);

    return this.app;
  }
}

export default RateRoutes;
