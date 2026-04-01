'use client';

import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { experience, education } from '@/data/mockData';
import { useLanguage } from '@/contexts/LanguageContext';
import { logResumeDownload } from '@/lib/analytics';

export default function ResumePage() {
  const { t } = useLanguage();

  const handleDownload = () => {
    logResumeDownload();
    // In production, this would download the actual PDF
    alert('Resume download would start here. Please add your resume PDF to /public/resume.pdf');
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn('up')} className="text-center space-y-4 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-accent uppercase">
                {t('resume.title')}
              </h1>
              <p className="text-white text-lg">
                {t('resume.subtitle')}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="inline-flex items-center gap-2 bg-primary-accent text-background px-6 py-3 rounded-full font-semibold hover:bg-background hover:text-primary-accent border-2 border-primary-accent transition-all duration-300"
              >
                <Download size={20} />
                {t('resume.download')}
              </motion.button>
            </motion.div>

            {/* Experience Section */}
            <motion.div variants={fadeIn('up', 0.2)} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="text-primary-accent" size={32} />
                <h2 className="text-3xl font-bold text-white">{t('resume.experience')}</h2>
              </div>

              <div className="space-y-8">
                {resumeData.experience.map((job, index) => (
                  <motion.div
                    key={job.id}
                    variants={fadeIn('up', 0.3 + index * 0.1)}
                    className="relative pl-8 border-l-2 border-primary-accent"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-accent rounded-full"></div>
                    
                    <div className="bg-background-card rounded-2xl p-6 border border-background-secondary">
                      <h3 className="text-xl font-bold text-primary-accent mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-gray-300 text-sm mb-3">
                        <span className="font-semibold">{job.company}</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {job.period}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4">{job.description}</p>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary-accent mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div variants={fadeIn('up', 0.4)} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="text-primary-accent" size={32} />
                <h2 className="text-3xl font-bold text-white">{t('resume.education')}</h2>
              </div>

              <div className="space-y-8">
                {resumeData.education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    variants={fadeIn('up', 0.5 + index * 0.1)}
                    className="relative pl-8 border-l-2 border-primary-accent"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-accent rounded-full"></div>
                    
                    <div className="bg-background-card rounded-2xl p-6 border border-background-secondary">
                      <h3 className="text-xl font-bold text-primary-accent mb-2">
                        {edu.degree}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-gray-300 text-sm mb-3">
                        <span className="font-semibold">{edu.institution}</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-gray-300">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
