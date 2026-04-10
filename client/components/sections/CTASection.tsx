'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CTASection() {
  const { t } = useLanguage();
  return (
    <section className="bg-background-secondary py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-primary-dark rounded-lg p-12 text-center space-y-6">
          <h4 className="text-white text-2xl md:text-3xl leading-relaxed">
            {t('cta.title')}
          </h4>
          <p className="text-gray-300 text-lg">
            {t('cta.subtitle')}
          </p>
          <div className="w-32 h-0.5 bg-primary-accent mx-auto"></div>
          <Link
            href="/contact"
            className="inline-block bg-primary-accent text-background px-6 py-2 rounded-full text-md font-bold uppercase hover:bg-background hover:text-primary-accent border-2 border-primary-accent transition-all duration-300 shadow-lg hover:shadow-primary-accent/50"
          >
            {t('cta.button')}
          </Link>
        </div>
      </div>
    </section>
  );
}
