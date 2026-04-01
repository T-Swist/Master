import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import CookieConsent from '@/components/CookieConsent';
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
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
