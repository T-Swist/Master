'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Sticky Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/aboutsbg.jpeg"
          alt="About background"
          fill
          className="object-cover object-center"
          style={{ objectPosition: 'center 16%' }}
          unoptimized
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-white text-sm uppercase tracking-wide">{t('about.subtitle')}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-accent uppercase">
              {t('about.title')}
            </h2>
            <div className="space-y-4">
              <p className="text-white leading-relaxed">
                Greetings, I'm <span className="text-primary-accent font-semibold">Thompson N Daiminah Jr</span>, 
                a skilled Frontend web developer and mobile app developer, as well as a residential electrician hailing from Liberia. Throughout my career, I've been 
                instrumental in assisting numerous clients with powerful digital solutions and professional electrical services.
              </p>
              <p className="text-white leading-relaxed">
                I take pride in contributing to the success of businesses by building robust applications and 
                providing reliable electrical installations and maintenance.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-64 md:h-80 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/abouth1.jpeg"
                alt="Thompson N Daiminah Jr"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 14%' }}
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
