
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4">
      <div className="container mx-auto text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Zatražite usluge,<br/> pronađite posao
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Nudite ili tražite posao? Naša platforma je tu da vas poveže.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Button className="bg-cenner hover:bg-cenner-dark text-white text-lg h-14 px-8 rounded-lg" asChild>
            <Link to="/services">
              Zatražite
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/5 text-lg h-14 px-8 rounded-lg" asChild>
            <Link to="/jobs">
              Pronađite
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
