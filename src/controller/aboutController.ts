import { Request, Response, NextFunction } from 'express';

class AboutController {
  public getAboutUs(req: Request, res: Response, next: NextFunction): void {
    console.log("Hiii");
    
  }
}

export default AboutController;
