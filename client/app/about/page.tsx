'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();
  
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <p className="text-white text-sm uppercase tracking-wide">{t('about.subtitle')}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-accent uppercase">
                {t('about.title')}
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary-accent">
                  Thompson N Daiminah Jr
                </h2>
                <p className="text-white leading-relaxed">
                  {t('about.description')}
                </p>
                <p className="text-white leading-relaxed">
                  I'm a passionate web & mobile app developer and residential electrician from Liberia. I build powerful digital solutions and provide professional electrical services to help businesses and individuals succeed.
                </p>
                <p className="text-white leading-relaxed">
                  My expertise spans modern web technologies, mobile app development, and residential electrical installations. I combine technical proficiency with practical problem-solving to deliver exceptional results.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                    alt="Web development workspace"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop"
                    alt="Mobile app development"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-2xl col-span-2">
                  <Image
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=400&fit=crop"
                    alt="Electrical work"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="bg-background-card rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-primary-accent mb-6">My Mission</h3>
              <p className="text-white leading-relaxed mb-4">
                My mission is to empower businesses and individuals by creating exceptional digital experiences 
                that drive growth and engagement. I believe that every business deserves a professional online 
                presence that reflects their unique value proposition.
              </p>
              <p className="text-white leading-relaxed">
                I'm dedicated to staying current with industry trends and continuously improving my skills to 
                provide cutting-edge solutions. Available 24/7 for support, I'm committed to building long-term 
                partnerships with my clients.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
