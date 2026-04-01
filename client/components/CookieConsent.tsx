'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import Cookies from 'js-cookie';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CookieConsent() {
  const { t } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookie-consent', 'accepted', { expires: 365 });
    setShowBanner(false);
  };

  const handleDecline = () => {
    Cookies.set('cookie-consent', 'declined', { expires: 365 });
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background-card border-t-2 border-primary-accent shadow-2xl"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <Cookie className="text-primary-accent flex-shrink-0 mt-1" size={24} />
                <div className="flex-1">
                  <p className="text-white text-sm mb-4">
                    {t('cookie.message')}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={handleAccept}
                      className="px-4 py-2 bg-primary-accent text-background rounded-full text-sm font-semibold hover:bg-background hover:text-primary-accent border-2 border-primary-accent transition-all duration-300"
                    >
                      {t('cookie.accept')}
                    </button>
                    <button
                      onClick={handleDecline}
                      className="px-4 py-2 bg-transparent text-white border-2 border-gray-700 rounded-full text-sm font-semibold hover:border-primary-accent transition-all duration-300"
                    >
                      {t('cookie.decline')}
                    </button>
                  </div>
                </div>
                <button
                  onClick={handleDecline}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
