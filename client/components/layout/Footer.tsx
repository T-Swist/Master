'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/portfolio', label: t('nav.portfolio') },
    { href: '/case-studies', label: t('nav.caseStudies') },
    { href: '/blog', label: t('nav.blog') },
    { href: '/resume', label: t('nav.resume') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-primary-dark border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          <Link href="/" className="flex items-center">
            <div className="relative w-24 h-12">
              <Image
                src="/logo02.png"
                alt="Thompson's Portfolio Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          <nav>
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-primary-accent transition-colors duration-300 uppercase text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-center">
            <p className="text-primary-accent text-sm">
              © {new Date().getFullYear()} Thompson N Daiminah Jr. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
