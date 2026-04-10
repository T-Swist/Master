'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, Settings, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SettingsModal from '@/components/SettingsModal';

export default function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const pagesDropdown = [
    { href: '/portfolio', label: t('nav.portfolio') },
    { href: '/blog', label: t('nav.blog') },
    { href: '/case-studies', label: t('nav.caseStudies') },
    { href: '/resume', label: t('nav.resume') },
  ];

  const isPagesActive = pagesDropdown.some(page => pathname === page.href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <div className="relative w-24 h-12">
              <Image
                src="/logo02.png"
                alt="Thompson's Portfolio Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`font-medium transition-colors relative ${
                        isActive 
                          ? 'text-primary-accent' 
                          : 'text-white hover:text-primary-accent'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-accent"></span>
                      )}
                    </Link>
                  </li>
                );
              })}
              
              {/* Pages Dropdown */}
              <li className="relative"
                onMouseEnter={() => setIsPagesDropdownOpen(true)}
                onMouseLeave={() => setIsPagesDropdownOpen(false)}
              >
                <button
                  className={`font-medium transition-colors relative flex items-center gap-1 ${
                    isPagesActive 
                      ? 'text-primary-accent' 
                      : 'text-white hover:text-primary-accent'
                  }`}
                >
                  Pages
                  <ChevronDown size={16} className={`transition-transform ${
                    isPagesDropdownOpen ? 'rotate-180' : ''
                  }`} />
                  {isPagesActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-accent"></span>
                  )}
                </button>
                
                {isPagesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-40 bg-background-card border-2 border-primary-accent rounded-lg shadow-xl overflow-hidden">
                    {pagesDropdown.map((page) => {
                      const isActive = pathname === page.href;
                      return (
                        <Link
                          key={page.href}
                          href={page.href}
                          className={`block px-4 py-3 transition-colors ${
                            isActive
                              ? 'bg-primary-accent text-background font-semibold'
                              : 'text-white hover:bg-primary-accent hover:text-background'
                          }`}
                        >
                          {page.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </li>

              <li>
                <button
                  onClick={() => setIsSettingsOpen(true)}
                  className="text-white hover:text-primary-accent transition-colors p-2 hover:bg-background-card rounded-full"
                  aria-label="Settings"
                >
                  <Settings size={20} />
                </button>
              </li>
            </ul>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary-accent hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-background z-40">
          <nav className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`uppercase text-xl font-medium tracking-wide transition-colors duration-300 ${
                        isActive 
                          ? 'text-primary-accent scale-110' 
                          : 'text-white hover:text-primary-accent'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              
              {/* Pages Section in Mobile */}
              <li className="border-t border-gray-700 pt-4 w-full text-center">
                <p className="text-primary-accent text-sm font-semibold mb-4 uppercase">Pages</p>
                <div className="flex flex-col space-y-4">
                  {pagesDropdown.map((page) => {
                    const isActive = pathname === page.href;
                    return (
                      <Link
                        key={page.href}
                        href={page.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`uppercase text-lg font-medium tracking-wide transition-colors duration-300 ${
                          isActive 
                            ? 'text-primary-accent' 
                            : 'text-white hover:text-primary-accent'
                        }`}
                      >
                        {page.label}
                      </Link>
                    );
                  })}
                </div>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </header>
  );
}
