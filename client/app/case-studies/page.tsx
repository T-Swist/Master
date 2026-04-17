'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { caseStudies } from '@/data/mockData';
import CloudinaryImage from '@/components/CloudinaryImage';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CaseStudiesPage() {
  const { t } = useLanguage();
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeIn('up')} className="text-center space-y-4 mb-16">
              <p className="text-white text-sm uppercase tracking-wide">{t('caseStudies.subtitle')}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-accent uppercase">
                {t('caseStudies.title')}
              </h1>
            </motion.div>

            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <motion.article
                  key={study.id}
                  variants={fadeIn('up', index * 0.2)}
                  className="bg-background-card rounded-3xl overflow-hidden border border-background-secondary"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <div className="relative h-60 lg:h-full min-h-[400px]">
                      {study.image.startsWith('/') || study.image.startsWith('../') ? (
                        <Image
                          src={study.image.replace('../', '/')}
                          alt={study.title}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      ) : (
                        <CloudinaryImage
                          src={study.image}
                          alt={study.title}
                          width={600}
                          height={400}
                          className="object-cover w-full h-full"
                        />
                      )}
                    </div>

                    <div className="p-8 lg:p-12 space-y-6">
                      <div>
                        <span className="text-primary-accent text-sm font-semibold uppercase">
                          {study.category}
                        </span>
                        <h2 className="text-3xl font-bold text-white mt-2">{study.title}</h2>
                        <p className="text-gray-400 mt-1">{study.client} • {study.year}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-primary-accent mb-2">{t('caseStudies.challenge')}</h3>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-primary-accent mb-2">{t('caseStudies.solution')}</h3>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-primary-accent mb-3">{t('caseStudies.results')}</h3>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-300">
                              <CheckCircle className="text-primary-accent flex-shrink-0 mt-1" size={20} />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href={(study as any).liveLink || `/case-studies/${study.slug}`}
                        target={(study as any).liveLink ? '_blank' : undefined}
                        rel={(study as any).liveLink ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-2 bg-primary-accent text-background px-6 py-3 rounded-full font-semibold hover:bg-background hover:text-primary-accent border-2 border-primary-accent transition-all duration-300"
                      >
                        {t('caseStudies.viewLive')}
                        <ArrowRight size={20} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
