'use server';

import { google } from 'googleapis';

export async function appendToSheet(values: { name: string; email: string; phoneNumber: string; message: string; }) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEETS_SHEET_ID;

    if (!spreadsheetId) {
      throw new Error('Google Sheet ID is not configured in environment variables.');
    }

    const range = 'A1';
    const valueInputOption = 'USER_ENTERED';

    const resource = {
      values: [[new Date().toISOString(), values.name, values.email, values.phoneNumber, values.message]],
    };

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption,
      requestBody: resource,
    });

    return { success: true };
  } catch (error) {
    console.error('Error appending to Google Sheet:', error);
    return { success: false, error: 'Failed to save data to the sheet.' };
  }
}
