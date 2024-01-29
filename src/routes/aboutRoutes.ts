import { Router } from 'express';
import { Routes } from '@interfaces/routeInterfaces';
import AboutController from "@controller/aboutController";

class AboutRoute implements Routes {
  public path: string;
  public router: Router;
  public aboutController: AboutController;

  constructor() {
    this.path = '/about';
    this.router = Router();
    this.aboutController = new AboutController();

    this.initializeRoutes();
  }

  private initializeRoutes() {
    // Add a check for the existence of this.router before using it
    if (this.router) {
      // Assuming `aboutUs` is a method in your AboutController class
      this.router.post(`${this.path}/aboutUs`, this.aboutController.aboutUs);
    }
  }
}

export default AboutRoute;
