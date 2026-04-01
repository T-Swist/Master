'use client';

import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-2"
    >
      <Languages size={18} className="text-primary-accent" />
      <div className="flex gap-1">
        <button
          onClick={() => setLanguage('en')}
          className={`px-2 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
            language === 'en'
              ? 'bg-primary-accent text-background'
              : 'bg-transparent text-white border border-gray-700 hover:border-primary-accent'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('es')}
          className={`px-2 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
            language === 'es'
              ? 'bg-primary-accent text-background'
              : 'bg-transparent text-white border border-gray-700 hover:border-primary-accent'
          }`}
        >
          ES
        </button>
      </div>
    </motion.div>
  );
}
