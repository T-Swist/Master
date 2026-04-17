'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();
  
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <p className="text-white text-sm uppercase tracking-wide">{t('about.subtitle')}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-accent uppercase">
                {t('about.title')}
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary-accent">
                  Thompson N Daiminah Jr
                </h2>
                <p className="text-primary-accent text-lg font-semibold">
                  A Residential Electrician & Frontend Developer
                </p>
                <p className="text-white leading-relaxed">
                  I'm a passionate Frontend Developer and Residential Electrician from Monrovia, Liberia. 
                  Currently volunteering at Zongea Institute of Technology, I specialize in building responsive user 
                  interfaces using React.js, Next.js, and TypeScript.
                </p>
                <p className="text-white leading-relaxed">
                  With 2.5 years of dedicated study and hands-on experience in modern web technologies, I focus on 
                  translating UI designs into clean, reusable components with attention to layout and user experience. 
                  I have a basic understanding of backend concepts (APIs, databases) and am actively learning full-stack development.
                </p>
                <p className="text-white leading-relaxed">
                  My expertise spans React.js, TypeScript, JavaScript, and modern web tools. I combine technical 
                  proficiency with practical problem-solving to deliver exceptional results in both digital solutions 
                  and electrical services.
                </p>
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-primary-accent mb-3">Top Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-primary-accent text-background px-4 py-2 rounded-full text-sm font-semibold">HTML5</span>
                    <span className="bg-primary-accent text-background px-4 py-2 rounded-full text-sm font-semibold">CSS3</span>
                    <span className="bg-primary-accent text-background px-4 py-2 rounded-full text-sm font-semibold">Tailwind CSS</span>
                    <span className="bg-primary-accent text-background px-4 py-2 rounded-full text-sm font-semibold">React.js</span>
                    <span className="bg-primary-accent text-background px-4 py-2 rounded-full text-sm font-semibold">TypeScript</span>
                    <span className="bg-primary-accent text-background px-4 py-2 rounded-full text-sm font-semibold">JavaScript</span>
                    <span className="bg-primary-accent text-background px-4 py-2 rounded-full text-sm font-semibold">Next.js</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/about1.jpeg"
                    alt="Web development workspace"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 40%' }}
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/about2.jpeg"
                    alt="Mobile app development"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 30%' }}
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-2xl col-span-2">
                  <Image
                    src="/about3.jpeg"
                    alt="Electrical work"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 12%' }}
                  />
                </div>
              </div>
            </div>

            <div className="bg-background-card rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-primary-accent mb-6">My Mission</h3>
              <p className="text-white leading-relaxed mb-4">
                My mission is to empower businesses and individuals by creating exceptional digital experiences 
                that drive growth and engagement. I believe that every business deserves a professional online 
                presence that reflects their unique value proposition.
              </p>
              <p className="text-white leading-relaxed">
                I'm dedicated to staying current with industry trends and continuously improving my skills to 
                provide cutting-edge solutions. Available 24/7 for support, I'm committed to building long-term 
                partnerships with my clients.
              </p>
            </div>

            <div className="bg-background-card rounded-3xl p-8 md:p-12 mt-2">
              <h3 className="text-2xl font-bold text-primary-accent mb-6">Personal Data</h3>
              <p className="text-primary-accent leading-relaxed font-semibold"> Name : <span className="text-white font-normal">Thompson N. Daiminah Jr</span></p>
              <p className="text-primary-accent leading-relaxed font-semibold"> DOB : <span className="text-white font-normal">January 8, 2003</span></p>
              <p className="text-primary-accent leading-relaxed font-semibold"> POB : <span className="text-white font-normal">Bong County, Gbarnga</span></p>
              <p className="text-primary-accent leading-relaxed font-semibold"> Father's Name : <span className="text-white font-normal">Thompson C. Daiminah Sr</span></p>
              <p className="text-primary-accent leading-relaxed font-semibold"> Mother's Name : <span className="text-white font-normal">Salome T Gebeor</span></p>
              <p className="text-primary-accent leading-relaxed font-semibold"> Nationality : <span className="text-white font-normal">Liberian</span></p>
              <p className="text-primary-accent leading-relaxed font-semibold"> Religion : <span className="text-white font-normal">Christianity</span></p>
              <p className="text-primary-accent leading-relaxed font-semibold"> Sex : <span className="text-white font-normal">Male</span></p>
              <p className="text-primary-accent leading-relaxed font-semibold"> Addressed : <span className="text-white font-normal">Rehab, Copper's Farm Comm..</span></p>
              <p className="text-primary-accent leading-relaxed font-semibold"> #s of Children : <span className="text-white font-normal">None</span></p>
              <p className="text-primary-accent leading-relaxed font-semibold"> Martial status : <span className="text-white font-normal">Single</span></p>
              <p className="text-primary-accent leading-relaxed font-semibold"> Complexion : <span className="text-white font-normal">Dark Brown</span></p>
              <p className="text-primary-accent leading-relaxed font-semibold"> Spouse's Name : <span className="text-white font-normal">--</span></p>
              <p className="text-primary-accent leading-relaxed font-semibold"> Height : <span className="text-white font-normal">5ft 3in</span></p>
              <p className="text-primary-accent leading-relaxed font-semibold"> County of Origin : <span className="text-white font-normal">Bong County</span></p>
              <p className="text-primary-accent leading-relaxed font-semibold"> Contact : <span className="text-white font-normal">+231 775536673/ +231 881617698</span></p>
              <p className="text-primary-accent leading-relaxed font-semibold"> Email addressed : <span className="text-white font-normal">daiminahthompson@gmail.com</span></p>
            </div>

            <div className="bg-background-card rounded-3xl p-8 md:p-12 mt-2">
              <h3 className="text-2xl font-bold text-primary-accent mb-6">Professional Summary</h3>
              <p className="text-white leading-relaxed mb-4">
                With a unique combination of technical skills in frontend development and hands-on experience in 
                residential electrical work, I bring a diverse skill set to every project. My journey from carpentry 
                apprentice to solar installer, and now to frontend developer, has equipped me with problem-solving 
                abilities and attention to detail that set me apart.
              </p>
              <p className="text-white leading-relaxed mb-4">
                Currently volunteering at Zongea Institute of Technology, I contribute to web development projects 
                while building responsive, user-friendly applications using modern technologies like React.js, Next.js, 
                and TypeScript. I'm passionate about continuous learning and staying updated with the latest web 
                development trends.
              </p>
              <p className="text-white leading-relaxed">
                For detailed information about my work experience and educational background, please visit my{' '}
                <Link href="/resume" className="text-primary-accent hover:underline font-semibold">
                  Resume page
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </> 
  );
}
