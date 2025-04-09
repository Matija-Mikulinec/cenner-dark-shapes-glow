
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cenner/10 z-0 blur-3xl opacity-50"
        style={{ 
          clipPath: 'polygon(0 20%, 100% 0, 100% 80%, 0 100%)'
        }}
      ></div>
      
      <div className="container mx-auto relative z-10">
        <div className="glass-card rounded-2xl p-10 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Spremni za suradnju?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Registrirajte se besplatno i započnite koristiti našu platformu već danas. 
            Povežite se s profesionalcima ili pronađite nove klijente.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-cenner hover:bg-cenner-dark text-white text-lg px-8 py-6 h-auto rounded-lg" asChild>
              <Link to="/register">Registrirajte se besplatno</Link>
            </Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white text-lg px-8 py-6 h-auto rounded-lg" asChild>
              <Link to="/about">Saznajte više</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
