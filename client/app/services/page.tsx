'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Code, Smartphone, Zap, Layout } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ServicesPage() {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Code,
      title: t('services.webDev.title'),
      description: t('services.webDev.description'),
      features: [
        'Responsive Design',
        'Performance Optimization',
        'SEO Best Practices',
        'Cross-browser Compatibility',
        'Modern Frameworks (React, Next.js)',
      ],
    },
    {
      icon: Smartphone,
      title: t('services.mobileDev.title'),
      description: t('services.mobileDev.description'),
      features: [
        'iOS & Android Apps',
        'Cross-platform Development',
        'React Native',
        'App Store Deployment',
        'Mobile UI/UX',
      ],
    },
    {
      icon: Zap,
      title: t('services.electrical.title'),
      description: t('services.electrical.description'),
      features: [
        'Electrical Installations',
        'Wiring & Rewiring',
        'Safety Inspections',
        'Lighting Solutions',
        'Maintenance & Repairs',
      ],
    },
   
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <p className="text-white text-sm uppercase tracking-wide">{t('services.subtitle')}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-accent uppercase">
                {t('services.title')}
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-background-card border border-background rounded-3xl p-8 hover:shadow-2xl hover:shadow-primary-accent/20 transition-all duration-300 hover:-translate-y-2"
                  >
                    <Icon className="text-primary-accent mb-6" size={56} />
                    <h2 className="text-white text-2xl font-bold mb-4">{service.title}</h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary-accent mt-1">✓</span>
                          <span className="text-white">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="bg-primary-dark rounded-3xl p-12 text-center space-y-6">
              <h3 className="text-white text-3xl font-bold">
                {t('cta.title')}
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                {t('cta.subtitle')}
              </p>
              <Link
                href="/contact"
                className="inline-block bg-primary-accent text-background px-10 py-4 rounded-full text-lg font-bold uppercase hover:bg-background hover:text-primary-accent border-2 border-primary-accent transition-all duration-300 shadow-lg hover:shadow-primary-accent/50"
              >
                {t('cta.button')}
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
