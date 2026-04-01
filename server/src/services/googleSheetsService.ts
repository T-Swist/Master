import { google } from 'googleapis';
import { config } from '../config';
import { ContactFormData } from '../types';

export class GoogleSheetsService {
  private sheets;
  private auth;

  constructor() {
    this.auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: config.googleSheets.clientEmail,
        private_key: config.googleSheets.privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    this.sheets = google.sheets({ version: 'v4', auth: this.auth });
  }

  async appendContactSubmission(data: ContactFormData, ip: string, userAgent: string): Promise<void> {
    try {
      const timestamp = new Date().toISOString();
      
      const values = [[
        timestamp,
        data.name,
        data.email,
        data.phone || '',
        data.company || '',
        data.projectType,
        data.budget,
        data.message,
        ip,
        userAgent,
      ]];

      await this.sheets.spreadsheets.values.append({
        spreadsheetId: config.googleSheets.sheetId,
        range: 'Sheet1!A:J',
        valueInputOption: 'RAW',
        requestBody: {
          values,
        },
      });

      console.log('✅ Contact form data saved to Google Sheets');
    } catch (error) {
      console.error('❌ Error saving to Google Sheets:', error);
      throw new Error('Failed to save contact form data');
    }
  }
}

export const googleSheetsService = new GoogleSheetsService();
