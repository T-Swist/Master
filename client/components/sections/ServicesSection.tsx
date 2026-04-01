'use client';

import { Code, Smartphone, Zap, Layout } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ServicesSection() {
  const { t } = useLanguage();
  const services = [
    {
      icon: Code,
      title: t('services.webDev.title'),
      description: t('services.webDev.description'),
    },
    {
      icon: Smartphone,
      title: t('services.mobileDev.title'),
      description: t('services.mobileDev.description'),
    },
    {
      icon: Zap,
      title: t('services.electrical.title'),
      description: t('services.electrical.description'),
    },
  ];

  return (
    <section className="bg-background-secondary py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <p className="text-white text-sm uppercase tracking-wide">{t('services.subtitle')}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-accent uppercase">
            {t('services.title')}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-24 h-0.5 bg-background-card"></div>
            <Code className="text-background-card" size={28} />
            <div className="w-24 h-0.5 bg-background-card"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-background-card border border-background rounded-3xl p-8 text-center hover:shadow-2xl hover:shadow-primary-accent/20 transition-all duration-300 hover:-translate-y-2"
              >
                <Icon className="text-primary-accent mx-auto mb-4" size={48} />
                <h2 className="text-white text-xl font-semibold mb-2">
                  {service.title}
                </h2>
                <p className="text-primary-accent text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
