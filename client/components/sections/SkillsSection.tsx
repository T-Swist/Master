'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { skills } from '@/data/mockData';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SkillsSection() {
  const { t } = useLanguage();
  const { ref, controls } = useScrollAnimation();

  const categories = {
    frontend: skills.filter(s => s.category === 'frontend'),
    backend: skills.filter(s => s.category === 'backend'),
    tools: skills.filter(s => s.category === 'tools'),
  };

  return (
    <section className="bg-background-secondary py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeIn('up')} className="text-center space-y-4 mb-16">
            <p className="text-white text-sm uppercase tracking-wide">{t('skills.subtitle')}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-accent uppercase">
              {t('skills.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {Object.entries(categories).map(([category, categorySkills], catIndex) => (
              <motion.div
                key={category}
                variants={fadeIn('up', catIndex * 0.1)}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-primary-accent capitalize">
                  {category === 'frontend' ? 'Frontend' : 
                   category === 'backend' ? 'Backend' : 'Tools'}
                </h3>
                
                {categorySkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-primary-accent font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + index * 0.05 }}
                        className="h-full bg-primary-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
