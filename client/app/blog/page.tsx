'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { blogPosts } from '@/data/mockData';
import CloudinaryImage from '@/components/CloudinaryImage';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BlogPage() {
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
              <p className="text-white text-sm uppercase tracking-wide">{t('blog.subtitle')}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-accent uppercase">
                {t('blog.title')}
              </h1>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  variants={fadeIn('up', index * 0.1)}
                  className="bg-background-card rounded-3xl overflow-hidden border border-background-secondary hover:shadow-2xl hover:shadow-primary-accent/10 transition-all duration-300"
                >
                  <div className="relative h-48">
                    <CloudinaryImage
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-accent text-background px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-white hover:text-primary-accent transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-gray-300 line-clamp-3">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-background px-3 py-1 rounded-full text-primary-accent text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-block text-primary-accent font-semibold hover:underline"
                    >
                      {t('blog.readMore')} →
                    </Link>
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
