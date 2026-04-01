'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { testimonials } from '@/data/mockData';
import CloudinaryImage from '@/components/CloudinaryImage';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeIn('up')} className="text-center space-y-4 mb-16">
            <p className="text-white text-sm uppercase tracking-wide">{t('testimonials.subtitle')}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-accent uppercase">
              {t('testimonials.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={fadeIn('up', index * 0.2)}
                className="bg-background-card rounded-3xl p-8 border border-background-secondary hover:shadow-2xl hover:shadow-primary-accent/10 transition-all duration-300 relative"
              >
                <Quote className="absolute top-6 right-6 text-primary-accent/20" size={48} />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <CloudinaryImage
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{testimonial.name}</h3>
                    <p className="text-primary-accent text-sm">{testimonial.position}</p>
                    <p className="text-gray-400 text-xs">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary-accent text-primary-accent" />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
