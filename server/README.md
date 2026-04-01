# Portfolio Server - Express/Node Backend

Backend API for Thompson's Portfolio website with Google Sheets and SendGrid integration.

## Features

- ✅ Contact form submission handling
- ✅ Google Sheets integration for data storage
- ✅ SendGrid automated email responses
- ✅ Portfolio projects API
- ✅ Services API
- ✅ Analytics tracking
- ✅ Rate limiting and security
- ✅ TypeScript support

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

Required environment variables:
- `GOOGLE_SHEETS_PRIVATE_KEY` - From Google Cloud service account
- `GOOGLE_SHEETS_CLIENT_EMAIL` - Service account email
- `GOOGLE_SHEET_ID` - Your Google Sheet ID
- `SENDGRID_API_KEY` - From SendGrid dashboard
- `SENDGRID_FROM_EMAIL` - Your verified sender email
- `SENDGRID_NOTIFICATION_EMAIL` - Email to receive notifications

### 3. Google Sheets Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google Sheets API
4. Create a service account
5. Download the JSON key file
6. Share your Google Sheet with the service account email
7. Copy the private key and client email to `.env`

### 4. SendGrid Setup

1. Sign up at [SendGrid](https://sendgrid.com/)
2. Create an API key
3. Verify your sender email
4. Copy the API key to `.env`

## Development

```bash
npm run dev
```

Server runs on `http://localhost:5000`

## Build

```bash
npm run build
```

## Production

```bash
npm start
```

## API Endpoints

### Contact
- `POST /api/contact` - Submit contact form

### Portfolio
- `GET /api/portfolio/projects` - Get all projects
- `GET /api/portfolio/projects/:id` - Get project by ID

### Services
- `GET /api/services` - Get all services

### Analytics
- `POST /api/analytics/page-view` - Track page view
- `POST /api/analytics/project-click` - Track project click

### Health
- `GET /api/health` - Server health check

## Project Structure

```
server/
├── src/
│   ├── controllers/      # Request handlers
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── middleware/      # Express middleware
│   ├── config/          # Configuration
│   ├── types/           # TypeScript types
│   └── server.ts        # Entry point
├── dist/                # Compiled JavaScript
├── .env                 # Environment variables
└── package.json
```

## Security

- Helmet for security headers
- CORS configured for client origin
- Rate limiting on contact endpoint
- Input validation with express-validator
- Environment variables for sensitive data

## Author

Thompson N Daiminah Jr
