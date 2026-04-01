# Portfolio Client - Next.js Frontend

Modern portfolio website for Thompson N Daiminah Jr built with Next.js 14, TypeScript, and TailwindCSS.

## Features

- ✅ Server-side rendering with Next.js 14
- ✅ TypeScript for type safety
- ✅ TailwindCSS for styling
- ✅ Responsive design (mobile-first)
- ✅ Contact form with validation
- ✅ Portfolio projects showcase
- ✅ Services display
- ✅ Smooth animations with Framer Motion
- ✅ SEO optimized

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
```

## Production

```bash
npm start
```

## Pages

- `/` - Home page with hero, about preview, services, portfolio
- `/about` - Full about page
- `/services` - Detailed services
- `/portfolio` - Portfolio projects grid
- `/contact` - Contact form

## Project Structure

```
client/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── about/          # About page
│   ├── services/       # Services page
│   ├── portfolio/      # Portfolio page
│   └── contact/        # Contact page
├── components/         # React components
│   ├── layout/        # Layout components
│   ├── ui/            # UI components
│   └── sections/      # Page sections
├── lib/               # Utilities and API
├── hooks/             # Custom React hooks
├── types/             # TypeScript types
├── public/            # Static assets
└── styles/            # Global styles
```

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **Animations:** Framer Motion
- **HTTP:** Axios

## Color Scheme

- Primary Dark: `#262525`
- Secondary Gray: `#525351`
- Accent Green: `#9acd32`

## Author

Thompson N Daiminah Jr
- GitHub: [@T-Swist](https://github.com/T-Swist)
- LinkedIn: [Thompson Daiminah](https://www.linkedin.com/in/thompson-daiminah-ba614929a/)
