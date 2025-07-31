
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LiquidBlobsBackground from '@/components/LiquidBlobsBackground';
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <LiquidBlobsBackground />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">{t('aboutTitle')}</h1>
          <div className="h-1 w-20 liquid-gradient mx-auto mb-12 rounded-full"></div>
          
          <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto mb-12">
            <p className="text-lg leading-relaxed mb-6">
              {t('aboutDescription1')}
            </p>
            <p className="text-lg leading-relaxed">
              {t('aboutDescription2')}
            </p>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mt-16 mb-8 text-center">{t('ourStory')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">{t('ourBeginnings')}</h3>
              <p className="text-muted-foreground">
                {t('beginningsDescription')}
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">{t('ourVision')}</h3>
              <p className="text-muted-foreground">
                {t('visionDescription')}
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
