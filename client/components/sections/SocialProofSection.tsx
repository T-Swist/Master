'use client';

import { motion } from 'framer-motion';
import { Github, Star, GitFork, Users, Coffee } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { socialProof } from '@/data/mockData';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SocialProofSection() {
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
            <p className="text-white text-sm uppercase tracking-wide">{t('socialProof.subtitle')}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-accent uppercase">
              {t('socialProof.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {socialProof.achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                variants={fadeIn('up', index * 0.1)}
                className="bg-background-card rounded-3xl p-8 text-center border border-background-secondary hover:shadow-2xl hover:shadow-primary-accent/10 transition-all duration-300"
              >
                <div className="text-5xl font-bold text-primary-accent mb-2">
                  {achievement.value}
                </div>
                <div className="text-white text-sm uppercase tracking-wide">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeIn('up', 0.4)}
            className="mt-12 bg-background-card rounded-3xl p-8 border border-background-secondary"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Github className="text-primary-accent" size={32} />
              <h3 className="text-2xl font-bold text-white">GitHub Activity</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-accent mb-1">
                  {socialProof.githubStats.repos}
                </div>
                <div className="text-gray-300 text-sm">Repositories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-accent mb-1">
                  {socialProof.githubStats.stars}
                </div>
                <div className="text-gray-300 text-sm">Stars Earned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-accent mb-1">
                  {socialProof.githubStats.followers}
                </div>
                <div className="text-gray-300 text-sm">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-accent mb-1">
                  {socialProof.githubStats.contributions}
                </div>
                <div className="text-gray-300 text-sm">Contributions</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
