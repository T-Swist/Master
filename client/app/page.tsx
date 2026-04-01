import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import BriefInfo from '@/components/sections/BriefInfo';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import SkillsSection from '@/components/sections/SkillsSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BriefInfo />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <PortfolioSection />
        <TestimonialsSection />
        <SocialProofSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
