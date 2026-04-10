'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  const titles = [t('hero.title1'), t('hero.title2'), t('hero.title3')];
  const roles = [t('hero.role1'), t('hero.role2'), t('hero.role3')];

  // Debug: Log the translation values
  useEffect(() => {
    console.log('Titles:', titles);
    console.log('Roles:', roles);
  }, [titles, roles]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  const socialLinks = [
    { href: 'https://web.facebook.com/tswist.daiminah', icon: Facebook, label: 'Facebook' },
    { href: 'https://github.com/T-Swist', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/thompson-n-daiminah-jr-ba614929a/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://wa.me/+231881617698', icon: MessageCircle, label: 'WhatsApp' },
    { href: 'https://www.instagram.com/tswist_dai/', icon: Instagram, label: 'Instagram' },
  ];

  return (
    <section className="min-h-screen bg-background pt-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-white text-md">{t('hero.greeting')}</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-accent uppercase tracking-wide">
              {t('hero.name')}
            </h1>
            <div className="min-h-[3rem]">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg md:text-xl text-white"
                >
                  <span className="text-primary-accent font-bold">{titles[currentRoleIndex]}</span>{' '}
                  <span className="font-semibold">{roles[currentRoleIndex]}</span>
                </motion.h3>
              </AnimatePresence>
            </div>
            <div className="w-24 h-0.5 bg-primary-accent"></div>
            <p className="text-white text-md leading-relaxed max-w-lg">
              {t('hero.description')}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary-accent text-background px-6 py-2 rounded-full text-md font-semibold hover:bg-background hover:text-primary-accent border-2 border-primary-accent transition-all duration-300 shadow-lg hover:shadow-primary-accent/50"
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
