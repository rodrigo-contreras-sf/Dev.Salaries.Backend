import express from 'express';
import CommonRoutes from './http/routes/common.routes';
import cors from 'cors';
import RateRoutes from './http/routes/rates.routes';
import { log } from 'debug';
import expressWinston from 'express-winston';
import winston from 'winston';
import technologyRepository from './infrastructure/repositories/technology.repository';
import Technology from './domain/entities/technology.entity';
import listTechnologyAction from './http/actions/technology/list.technology.action';
const app: express.Application = express();
const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
      winston.format.json(),
      winston.format.prettyPrint(),
      winston.format.colorize({ all: true })
  ),
};
if (!process.env.DEBUG) {
    loggerOptions.meta = false; // when not debugging, log requests as one-liners
}
app.use(expressWinston.logger(loggerOptions));
const routes: Array<CommonRoutes> = [];
app.use(cors());
app.use(express.json());

//llamar a la funcion de save de repositorio de technology y guardar 4
technologyRepository.save(new Technology('Vue'));
technologyRepository.save(new Technology('React'));
technologyRepository.save(new Technology('Angular'));
technologyRepository.save(new Technology('Python'));
app.get("/technologies", listTechnologyAction.run)

routes.push(new RateRoutes(app));
app.listen(3000, () => {
  routes.forEach((route: CommonRoutes) => {
    log(`Routes configured for ${route.getName()}`);
  });
  log('Server listening on port 3000');
});