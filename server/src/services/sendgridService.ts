import sgMail from '@sendgrid/mail';
import { config } from '../config';
import { ContactFormData } from '../types';
import { getAutoResponseTemplate, getNotificationTemplate } from './emailTemplates';

sgMail.setApiKey(config.sendgrid.apiKey || '');

export class SendGridService {
  async sendAutoResponse(data: ContactFormData): Promise<void> {
    try {
      const msg = {
        to: data.email,
        from: {
          email: config.sendgrid.fromEmail || '',
          name: config.sendgrid.fromName,
        },
        subject: 'Thank You for Contacting Thompson N Daiminah Jr',
        html: getAutoResponseTemplate(data),
      };

      await sgMail.send(msg);
      console.log('✅ Auto-response email sent to:', data.email);
    } catch (error) {
      console.error('❌ Error sending auto-response email:', error);
      throw new Error('Failed to send auto-response email');
    }
  }

  async sendNotificationEmail(data: ContactFormData): Promise<void> {
    try {
      const msg = {
        to: config.sendgrid.notificationEmail || '',
        from: {
          email: config.sendgrid.fromEmail || '',
          name: config.sendgrid.fromName,
        },
        subject: `New Contact Form Submission from ${data.name}`,
        html: getNotificationTemplate(data),
      };

      await sgMail.send(msg);
      console.log('✅ Notification email sent');
    } catch (error) {
      console.error('❌ Error sending notification email:', error);
    }
  }
}

export const sendGridService = new SendGridService();
