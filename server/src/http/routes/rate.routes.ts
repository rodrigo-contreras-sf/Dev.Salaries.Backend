import { Application } from "express";
//import listUsersAction from "../actions/users/list.users.action";
import createRateAction from "../actions/create.rate.action";
import CommonRoutes from "./common.routes";

class RateRoute extends CommonRoutes {
  constructor(app: Application) {
    super(app, 'Rate');
  }

  setUpRoutes(): Application {

    this.app.post('/rate', createRateAction.run);

    return this.app;
  }
}

export default RateRoute;
