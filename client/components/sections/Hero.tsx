'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const words = [t('hero.role1'), t('hero.role2')];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      if (!typedRef.current) return;
      
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        typedRef.current.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typedRef.current.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 2000);
        return;
      }

      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }

      setTimeout(type, isDeleting ? 100 : 150);
    };

    type();
  }, [t]);

  const socialLinks = [
    { href: 'https://web.facebook.com/tswist.daiminah', icon: Facebook, label: 'Facebook' },
    { href: 'https://github.com/T-Swist', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/thompson-daiminah-ba614929a/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://twitter.com/your-twitter', icon: Twitter, label: 'Twitter' },
    { href: 'https://instagram.com/your-instagram', icon: Instagram, label: 'Instagram' },
  ];

  return (
    <section className="min-h-screen bg-background pt-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-white text-lg">{t('hero.greeting')}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-accent uppercase tracking-wide">
              {t('hero.name')}
            </h1>
            <h3 className="text-2xl md:text-3xl text-white">
              {t('hero.title')} <span ref={typedRef} className="text-primary-accent"></span>
            </h3>
            <div className="w-24 h-0.5 bg-primary-accent"></div>
            <p className="text-white text-lg leading-relaxed max-w-lg">
              {t('hero.description')}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-accent text-background px-8 py-3 rounded-full text-lg font-semibold hover:bg-background hover:text-primary-accent border-2 border-primary-accent transition-all duration-300 shadow-lg hover:shadow-primary-accent/50"
            >
              {t('hero.cta')}
            </Link>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary-accent p-1">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/FB_IMG_16695865606265232.jpg"
                  alt="Thompson N Daiminah Jr"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-background-card border-2 border-background rounded-l-3xl p-4 space-y-4 hidden lg:block">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white hover:text-primary-accent transition-colors duration-300"
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
