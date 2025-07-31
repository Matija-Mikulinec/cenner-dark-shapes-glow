
import React from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LiquidBlobsBackground from '@/components/LiquidBlobsBackground';
import { Button } from '@/components/ui/button';
import { Code, Palette, Megaphone, Globe, Smartphone, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Offer = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Code,
      title: t('webDevelopment'),
      description: t('webDevelopmentDesc'),
      price: t('priceFrom') + ' 2.500€'
    },
    {
      icon: Smartphone,
      title: t('mobileApps'),
      description: t('mobileAppsDesc'),
      price: t('priceFrom') + ' 3.500€'
    },
    {
      icon: Palette,
      title: t('design'),
      description: t('designDesc'),
      price: t('priceFrom') + ' 800€'
    },
    {
      icon: Megaphone,
      title: t('digitalMarketing'),
      description: t('digitalMarketingDesc'),
      price: t('priceFrom') + ' 500€/mj'
    },
    {
      icon: Globe,
      title: t('seoOptimization'),
      description: t('seoOptimizationDesc'),
      price: t('priceFrom') + ' 300€/mj'
    },
    {
      icon: BarChart3,
      title: t('analytics'),
      description: t('analyticsDesc'),
      price: t('priceFrom') + ' 200€/mj'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <LiquidBlobsBackground />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">{t('offer')}</h1>
          <div className="h-1 w-20 liquid-gradient mx-auto mb-12 rounded-full"></div>
          
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-16">
            {t('offerDescription')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center">
                <service.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="text-lg font-bold text-primary mb-4">{service.price}</div>
                <Button variant="glass" size="sm" className="w-full">
                  {t('learnMore')}
                </Button>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">{t('readyToStart')}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('contactUsDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="liquid" size="lg">{t('contactUs')}</Button>
              <Button variant="glass" size="lg">{t('freeConsultation')}</Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Offer;
