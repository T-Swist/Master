'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6 max-w-md"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AlertCircle className="w-20 h-20 text-red-500 mx-auto" />
        </motion.div>
        
        <h2 className="text-3xl font-bold text-white">Something went wrong!</h2>
        
        <p className="text-gray-300">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={reset}
          className="inline-flex items-center gap-2 bg-primary-accent text-background px-6 py-3 rounded-full font-semibold hover:bg-background hover:text-primary-accent border-2 border-primary-accent transition-all duration-300"
        >
          <RefreshCw size={20} />
          Try Again
        </motion.button>
      </motion.div>
    </div>
  );
}
