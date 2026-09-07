'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Code } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PortfolioSection() {
  const { t } = useLanguage();
  const projects = [
    { id: '1', title: 'BJA Record Label Platform', image: '/projects/bjarecord.png', link: 'https://bja-record.onrender.com/', description: 'Full-stack music platform with real-time updates', tech: ['React', 'Node.js', 'PostgreSQL'] },
    { id: '2', title: 'Whip In Time', image: '/projects/projectwit.png', link: 'https://whipintime.onrender.com/', description: 'Car rental platform with payment integration', tech: ['React', 'Express', 'Stripe'] },
    { id: '3', title: 'AH-NUEN Class', image: '/projects/AH-NUEN.png', link: 'https://ahnuenclass.com/', description: 'Professional business website', tech: ['React', 'Vite', 'Tailwind'] },
    { id: '4', title: 'T-Swist Menu', image: '/Project04.jpg', link: 'https://thompsondaiminah.vercel.app/', description: 'Restaurant menu application', tech: ['Next.js', 'TypeScript'] },
    { id: '5', title: 'DaiMass Solution', image: '/projects/DaiMass.png', link: 'https://dai-mass-solution.vercel.app/', description: 'Business services platform', tech: ['React', 'Node.js'] },
    { id: '6', title: "Comfort's Menu", image: '/Screenshot (26).png', link: 'https://thompsondaiminah.vercel.app/', description: 'Food ordering system', tech: ['Next.js', 'MongoDB'] },
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
              <h2 className="text-white text-center uppercase text-sm font-semibold mb-2">
                {project.title}
              </h2>
              <p className="text-primary-accent text-xs text-center mb-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="text-xs bg-background-card text-primary-accent px-2 py-1 rounded-full"
                  >
                    {technology}
                  </span>
                ))}
              </div>
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
