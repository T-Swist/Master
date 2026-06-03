'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PortfolioPage() {
  const { t } = useLanguage();
  
  const projects = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce website with shopping cart, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      technologies: ['React', 'Next.js', 'Stripe'],
      category: 'Web Development',
    },
    {
      id: '2',
      title: 'Restaurant Website',
      description: 'Beautiful restaurant website with online ordering and reservation system.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      technologies: ['Next.js', 'TailwindCSS'],
      category: 'Web Development',
    },
    {
      id: '3',
      title: 'Real Estate Platform',
      description: 'Property listing website with advanced search, virtual tours, and agent dashboard.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      category: 'Web Development',
    },
    {
      id: '4',
      title: 'Business Portfolio',
      description: 'Professional portfolio and landing page with modern animations and responsive design.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      category: 'Web Development',
    },
    {
      id: '5',
      title: 'Residential Electrical Project',
      description: 'Complete home wiring and electrical panel installation with safety compliance.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop',
      technologies: ['Wiring', 'Panel Installation', 'Safety Codes'],
      category: 'Electrical',
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Placeholder Notice Banner */}
            <div className="bg-yellow-500/10 border-2 border-yellow-500 rounded-2xl p-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-yellow-500 font-bold text-lg mb-2">Demo Content Notice</h3>
                  <p className="text-white/80 leading-relaxed">
                    The projects displayed on this page are <strong className="text-yellow-500">placeholder/demo content</strong> for demonstration purposes only. 
                    They do not represent actual completed projects. For real project examples, please visit the{' '}
                    <a href="/case-studies" className="text-primary-accent hover:underline font-semibold">Case Studies</a> page.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4 mb-16">
              <p className="text-white text-sm uppercase tracking-wide">{t('portfolio.subtitle')}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-accent uppercase">
                {t('portfolio.title')}
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-background-card rounded-3xl overflow-hidden border border-background shadow-lg hover:shadow-2xl hover:shadow-primary-accent/20 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h2 className="text-white text-xl font-bold mb-2">{project.title}</h2>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                    </div>
                    <div>
                      <p className="text-primary-accent text-xs font-semibold mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-background px-3 py-1 rounded-full text-white text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-gray-700">
                      <p className="text-primary-accent text-sm font-semibold">{project.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
