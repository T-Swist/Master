'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ContactForm';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-accent uppercase">
                {t('contact.title')}
              </h1>
              <p className="text-white text-lg">
                {t('contact.subtitle')}
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
