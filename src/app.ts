// app.ts

import express from 'express';
import { Routes } from '@interfaces/routeInterfaces';
import aboutRoutes from '@/routes/aboutRoutes';
import cors from 'cors';

class App {
  public app: express.Application;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.port = process.env.PORT || 3000;
    
    this.initializeMiddlewares();
   
    this.initializeRoutes(routes);
  }

  private initializeMiddlewares() {
    this.app.use(cors()); // Add this line to enable CORS
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*'); // Adjust the origin based on your requirements
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      next();
    });
    // Add any middlewares here
  }


  private initializeRoutes(routes: Routes[]) {
    
    // Include your other routes here
   routes.forEach(route => {this.app.use('/',route.router)});
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running at http://localhost:${this.port}`);
    }).on('error', (err: NodeJS.ErrnoException) => {
      console.error(`Error starting server: ${err.message}`);
    });
  }
}

export default App;
