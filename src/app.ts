import '@/index';
import config from 'config';
import express, { Express } from 'express';
import { Routes } from '@interfaces/routeInterfaces';
import { logger, stream } from '@utils/logger';
import errorMiddleware from '@middlewares/errorMiddleware';

class App {
  public app: express.Application;
  public port: string | number;
  public env: string;

  constructor(routes: Routes[]) {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.env = process.env.NODE_ENV || 'development';

    // this.initializeMiddlewares();
    // this.initializeRoutes(routes);
    // this.initializeSwagger();
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(this.port, () => {
      logger.info(`=================================`);
      logger.info(`======= ENV: ${this.env} =======`);
      logger.info(`🚀 App listening on the port ${this.port}`);
      logger.info(`=================================`);
    });
  }

  public getServer() {
    return this.app;
  }
  
  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.app.use('/', route.router);
    });
  }
  
  private initializeErrorHandling() {
    this.app.use(errorMiddleware);

    this.app.use((req,res,next) =>{
        return res.status(400).json({status:"error",message:"This URL is not valid,Please enter valid URL"})
    })
  }

}

export default App;
