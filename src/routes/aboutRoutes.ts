import { Router } from "express";
import { Routes } from "@interfaces/routeInterfaces";
import AboutController from "@controller/aboutController";

class AboutRoute implements Routes {
    public path = "/about";
    public router = Router();
    public aboutController = new AboutController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.post(`${this.path}/ubquiz`, this.aboutController.getAboutUs);
    }
}

export default AboutRoute;
