'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Sun, Moon, Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const { language, setLanguage } = useLanguage();
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-background-card border-2 border-primary-accent rounded-3xl p-8 z-[101] shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close settings"
            >
              <X size={24} />
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold text-primary-accent mb-6">Settings</h2>

            {/* Theme Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                {theme === 'dark' ? <Moon size={20} className="text-primary-accent" /> : <Sun size={20} className="text-primary-accent" />}
                <h3 className="text-lg font-semibold text-white">Theme</h3>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setTheme('dark');
                    localStorage.setItem('theme', 'dark');
                    document.documentElement.classList.remove('light');
                  }}
                  className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-primary-accent text-background'
                      : 'bg-background border-2 border-gray-700 text-white hover:border-primary-accent'
                  }`}
                >
                  <Moon size={18} className="inline mr-2" />
                  Dark
                </button>
                <button
                  onClick={() => {
                    setTheme('light');
                    localStorage.setItem('theme', 'light');
                    document.documentElement.classList.add('light');
                  }}
                  className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    theme === 'light'
                      ? 'bg-primary-accent text-background'
                      : 'bg-background border-2 border-gray-700 text-white hover:border-primary-accent'
                  }`}
                >
                  <Sun size={18} className="inline mr-2" />
                  Light
                </button>
              </div>
            </div>

            {/* Language Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Languages size={20} className="text-primary-accent" />
                <h3 className="text-lg font-semibold text-white">Language</h3>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setLanguage('en')}
                  className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    language === 'en'
                      ? 'bg-primary-accent text-background'
                      : 'bg-background border-2 border-gray-700 text-white hover:border-primary-accent'
                  }`}
                >
                  🇺🇸 English
                </button>
                <button
                  onClick={() => setLanguage('es')}
                  className={`flex-1 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    language === 'es'
                      ? 'bg-primary-accent text-background'
                      : 'bg-background border-2 border-gray-700 text-white hover:border-primary-accent'
                  }`}
                >
                  🇪🇸 Español
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
