import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { LanguageProvider } from '@/contexts/LanguageContext';

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Thompson N Daiminah Jr | Web & Mobile App Developer & Residential Electrician',
  description: 'Professional web & mobile app developer and residential electrician from Liberia. Building powerful digital solutions and providing expert electrical services.',
  keywords: ['web developer', 'mobile app developer', 'residential electrician', 'Liberia', 'Thompson Daiminah', 'electrical services'],
  authors: [{ name: 'Thompson N Daiminah Jr' }],
  icons: {
    icon: [
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io/favicon.ico', sizes: 'any' },
    ],
    apple: '/favicon_io/apple-touch-icon.png',
    other: [
      { rel: 'android-chrome-192x192', url: '/favicon_io/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/favicon_io/android-chrome-512x512.png' },
    ],
  },
  openGraph: {
    title: 'Thompson N Daiminah Jr | Web & Mobile App Developer & Residential Electrician',
    description: 'Professional web & mobile app developer and residential electrician from Liberia',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-poppins antialiased bg-background text-white`}>
        <LanguageProvider>
          <GoogleAnalytics />
          <ScrollProgress />
          {children}
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
