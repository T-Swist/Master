import { Request, Response } from 'express';
import { googleSheetsService } from '../services/googleSheetsService';
import { sendGridService } from '../services/sendgridService';
import { ContactFormData } from '../types';

export const submitContactForm = async (req: Request, res: Response) => {
  try {
    const formData: ContactFormData = req.body;
    const ip = req.ip || req.socket.remoteAddress || 'unknown';
    const userAgent = req.get('user-agent') || 'unknown';

    await googleSheetsService.appendContactSubmission(formData, ip, userAgent);

    await sendGridService.sendAutoResponse(formData);
    
    await sendGridService.sendNotificationEmail(formData);

    res.status(200).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
    });
  } catch (error: any) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process your request. Please try again later.',
    });
  }
};
