// controllers/aboutController.ts

import { Request, Response } from 'express';

class AboutController{
  public aboutUs = async(req: Request, res: Response) => {
    try {
      console.log("111111");
      
      const aboutData = {
        title: 'Resume Repository Project',
        description: 'This is a sample aboutUs endpoint for the Resume Repository project.',
        version: '1.0.0',
      };
  
      res.status(200).json(aboutData);
    } catch (error) {
      console.error('Error in getAboutUs:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
}

export default AboutController
