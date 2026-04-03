'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
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
    { href: 'https://wa.me/+231881617698', icon: MessageCircle, label: 'WhatsApp' },
    { href: 'https://instagram.com/your-instagram', icon: Instagram, label: 'Instagram' },
  ];

  return (
    <section className="min-h-screen bg-background pt-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-white text-md">{t('hero.greeting')}</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-accent uppercase tracking-wide">
              {t('hero.name')}
            </h1>
            <h3 className="text-lg md:text-xl text-white">
              {t('hero.title')} <span ref={typedRef} className="text-primary-accent"></span>
            </h3>
            <div className="w-24 h-0.5 bg-primary-accent"></div>
            <p className="text-white text-md leading-relaxed max-w-lg">
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
            <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full bg-primary-accent p-1">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/passphoto.jpeg"
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
