'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { testimonials } from '@/data/mockData';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const { ref, controls } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-2 sm:px-4 lg:px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeIn('up')} className="text-center space-y-2 mb-8">
            <p className="text-white text-sm uppercase tracking-wide">{t('testimonials.subtitle')}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-accent uppercase">
              {t('testimonials.title')}
            </h2>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-background-card rounded-3xl p-6 md:p-8 border border-background-secondary shadow-2xl relative"
              >
                <Quote className="absolute top-4 right-4 text-primary-accent/20" size={48} />
                
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mb-3 border-4 border-primary-accent">
                    <Image
                      src={`/business0${(currentIndex % 3) + 1}.jpg`}
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">{currentTestimonial.name}</h3>
                  <p className="text-primary-accent text-sm font-medium">{currentTestimonial.position}</p>
                  <p className="text-gray-400 text-xs">{currentTestimonial.company}</p>
                </div>

                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-primary-accent text-primary-accent" />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed text-base italic text-center max-w-xl mx-auto">
                  "{currentTestimonial.text}"
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 bg-primary-accent text-background p-2 rounded-full hover:bg-background hover:text-primary-accent border-2 border-primary-accent transition-all duration-300 shadow-lg items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 bg-primary-accent text-background p-2 rounded-full hover:bg-background hover:text-primary-accent border-2 border-primary-accent transition-all duration-300 shadow-lg items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-accent w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
