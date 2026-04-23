# Portfolio Setup Guide

This guide will help you set up and run Thompson's Portfolio application (Next.js client + Express server).

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git (optional)

## Project Structure

```
Master/
├── client/          # Next.js frontend
├── server/          # Express backend
└── SETUP.md         # This file
```

## Quick Start

### 1. Install Dependencies

**For the Server:**
```bash
cd server
npm install
```

**For the Client:**
```bash
cd client
npm install
```

### 2. Configure Environment Variables

**Server (.env):**
```bash
cd server
cp .env.example .env
```

Edit `server/.env` and add your credentials:
- Google Sheets API credentials
- SendGrid API key
- Other configuration values

**Client (.env.local):**
The client already has a `.env.local` file with default values. Update if needed:
```
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Set Up Google Sheets

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google Sheets API
4. Create a service account and download the JSON key
5. Create a Google Sheet for contact form submissions
6. Share the sheet with the service account email
7. Add credentials to `server/.env`

### 4. Set Up SendGrid

1. Sign up at [SendGrid](https://sendgrid.com/)
2. Create an API key
3. Verify your sender email
4. Add API key to `server/.env`

### 5. Copy Images

Copy all images from the original Master folder to `client/public/images/`:
- FB_IMG_16695865606265232.jpg
- project-1.png
- project-2.png
- Project04.jpg
- Screenshot (11).png
- Screenshot (26).png
- p.png
- business01.jpg
- business03.jpg
- logo02.png

### 6. Run the Application

**Start the Server (Terminal 1):**
```bash
cd server
npm run dev
```
Server runs on http://localhost:5000

**Start the Client (Terminal 2):**
```bash
cd client
npm run dev
```
Client runs on http://localhost:3000

## Building for Production

**Server:**
```bash
cd server
npm run build
npm start
```

**Client:**
```bash
cd client
npm run build
npm start
```

## Troubleshooting

### Port Already in Use
If port 3000 or 5000 is already in use, you can change it:
- Server: Update `PORT` in `server/.env`
- Client: Run with `PORT=3001 npm run dev`

### Module Not Found Errors
Make sure you've installed all dependencies:
```bash
npm install
```

### TypeScript Errors
Build the TypeScript files:
```bash
npm run build
```

### API Connection Issues
- Verify the server is running on port 5000
- Check `NEXT_PUBLIC_API_URL` in client `.env.local`
- Check CORS settings in `server/src/server.ts`

## Features

### Client (Next.js)
- Home page with hero, services, portfolio preview
- About page
- Services page
- Portfolio page
- Contact form with validation
- Responsive design
- SEO optimized

### Server (Express)
- Contact form API with Google Sheets integration
- SendGrid email automation
- Portfolio projects API
- Services API
- Analytics tracking
- Rate limiting and security

## Support

For issues or questions, contact Thompson N Daiminah Jr.

## License

MIT License - See LICENSE file for details
