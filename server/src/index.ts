import express from 'express';
import CommonRoutes from './http/routes/common.routes';
import cors from 'cors';
import RateRoutes from './http/routes/rates.routes';
import { log } from 'debug';
import expressWinston from 'express-winston';
import winston from 'winston';
import TechnologyRoutes from './http/routes/technology.routes';

const app: express.Application = express();
const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true }),
  ),
};

if (!process.env.DEBUG) {
  loggerOptions.meta = false; // when not debugging, log requests as one-liners
}

app.use(expressWinston.logger(loggerOptions));
app.use(cors());
app.use(express.json());

const routes: Array<CommonRoutes> = [];
routes.push(new RateRoutes(app));
routes.push(new TechnologyRoutes(app));

app.listen(3000, () => {
  routes.forEach((route: CommonRoutes) => {
    log(`Routes configured for ${route.getName()}`);
  });
  log('Server listening on port 3000');
});
