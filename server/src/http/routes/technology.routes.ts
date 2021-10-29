import createTechnologyAction from "../../http/actions/technology/create.technology.action";
import CommonRoutes from "./common.routes";
import { Application, } from "express";//Request, Response
import deleteTechnologyAction from "../actions/technology/delete.technology.action";
import updateTechnologyAction from "../actions/technology/update.technology.action";
import listTechnologyAction from "../actions/rates/list.rate.action";

class RateRoutes extends CommonRoutes {
  constructor(app: Application) {
    super(app, 'Technology');
  }

  setUpRoutes(): Application {

    this.app.post('/technology', createTechnologyAction.run);

    this.app.put('/technology/:id', updateTechnologyAction.run);

    this.app.delete('/technology/:id', deleteTechnologyAction.run);

    this.app.get('/technology', listTechnologyAction.run);

    return this.app;
  }
}

export default RateRoutes;
