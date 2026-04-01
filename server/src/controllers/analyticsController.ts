import { Request, Response } from 'express';

export const trackPageView = (req: Request, res: Response) => {
  const { page } = req.body;
  
  console.log(`📊 Page view tracked: ${page}`);
  
  res.status(200).json({
    success: true,
    message: 'Page view tracked',
  });
};

export const trackProjectClick = (req: Request, res: Response) => {
  const { projectId } = req.body;
  
  console.log(`📊 Project click tracked: ${projectId}`);
  
  res.status(200).json({
    success: true,
    message: 'Project click tracked',
  });
};
