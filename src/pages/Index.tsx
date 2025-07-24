
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import CTASection from '@/components/CTASection';
import NetworkBackground from '@/components/NetworkBackground';
import GeometricShapes from '@/components/GeometricShapes';
import BenefitsSection from '@/components/BenefitsSection';

const Index = () => {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = mainRef.current?.querySelectorAll('section');
      
      sections?.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollY > sectionTop - window.innerHeight / 1.5 && 
            scrollY < sectionTop + sectionHeight) {
          section.classList.add('opacity-100', 'translate-y-0');
          section.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    };
    
    // Initial check
    setTimeout(handleScroll, 100);
    
    // Add scroll event
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <NetworkBackground />
      <GeometricShapes />
      
      <main ref={mainRef}>
        <HeroSection />
        <section className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <BenefitsSection />
        </section>
        <section className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <AboutSection />
        </section>
        <section className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <ServicesSection />
        </section>
        <section className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <CTASection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
