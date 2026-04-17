'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Code } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PortfolioSection() {
  const { t } = useLanguage();
  const projects = [
    { id: '1', title: 'Jett Electric', image: '/business01.jpg', link: 'https://jettelectric.com' },
    { id: '2', title: 'T-Swist Fingers', image: '/project-2.png', link: 'https://tswistfingers.com' },
    { id: '3', title: 'T-Swist Menu', image: '/Project04.jpg', link: 'https://tswistmenu.com' },
    { id: '4', title: 'Whip In Time', image: '/projects/projectwit.png', link: 'https://whipintime.onrender.com/' },
    { id: '5', title: 'Dream To Live', image: '/project-1.png', link: 'https://dreamtolive.com' },
    { id: '6', title: "Comfort's Menu", image: '/Screenshot (26).png', link: 'https://comfortsmenu.com' },
  ];

  return (
    <section className="bg-background-secondary py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <p className="text-white text-sm uppercase tracking-wide">{t('portfolio.subtitle')}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-accent uppercase">
            {t('portfolio.title')}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-24 h-0.5 bg-background-card"></div>
            <Code className="text-background-card" size={28} />
            <div className="w-24 h-0.5 bg-background-card"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl p-4 border border-background shadow-lg hover:shadow-2xl hover:shadow-background transition-all duration-300"
            >
              <div className="relative w-full h-40 rounded-md overflow-hidden mb-3">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-white text-center uppercase text-sm font-semibold">
                {project.title}
              </h2>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-accent text-background px-2 py-1 rounded-full text-sm font-semibold hover:bg-background hover:text-primary-accent border-2 border-primary-accent transition-all duration-300 mt-4"
              >
                View Project
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-block bg-primary-accent text-background px-6 py-2 rounded-full text-lg font-semibold hover:bg-background hover:text-primary-accent border-2 border-primary-accent transition-all duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
