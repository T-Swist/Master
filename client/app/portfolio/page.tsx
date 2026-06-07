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
      title: 'Whip In Time',
      description: 'Premium car rental platform with booking system, multiple payment options, and car owner marketplace.',
      image: '/projects/projectwit.png',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
      category: 'Web Development',
      liveLink: 'https://whipintime.onrender.com/',
    },
    {
      id: '2',
      title: 'BJA Record Label',
      description: 'Full-stack music platform with artist management, real-time updates, and secure admin dashboard.',
      image: '/projects/bjarecord.png',
      technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Socket.io'],
      category: 'Web Development',
      liveLink: 'https://bja-record.onrender.com/',
    },
    {
      id: '3',
      title: 'ETW Care Services',
      description: 'Professional care services website with clean design, service showcase, and client-focused layout.',
      image: '/projects/etw-project.png',
      technologies: ['React', 'Vite', 'CSS'],
      category: 'Web Development',
      liveLink: 'https://care-services-theta.vercel.app/',
    },
    {
      id: '4',
      title: 'Residential Electrical Project',
      description: 'Complete home wiring and electrical panel installation with safety compliance.',
      image: '/projects/electrical-project.jpg',
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
