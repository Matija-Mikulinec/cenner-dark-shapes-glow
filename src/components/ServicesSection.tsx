
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Paintbrush, FileText, Camera, BarChart, Globe } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 bg-black/20" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Naše usluge</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Širok spektar usluga dostupnih na našoj platformi
          </p>
          <div className="h-1 w-20 bg-cenner mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-secondary/30 border-white/10 hover:border-cenner/30 transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-cenner/10 text-cenner mb-4">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    icon: Code,
    title: "Razvoj softvera",
    description: "Web aplikacije, mobilne aplikacije, desktop softveri i drugi razvojni projekti."
  },
  {
    icon: Paintbrush,
    title: "Dizajn",
    description: "Grafički dizajn, UI/UX dizajn, brand identitet i vizualni materijali."
  },
  {
    icon: FileText,
    title: "Sadržaj",
    description: "Copywriting, prijevodi, blogovi, članci i drugi pisani materijali."
  },
  {
    icon: Camera,
    title: "Multimedija",
    description: "Fotografija, video produkcija, animacije i audiovisual sadržaji."
  },
  {
    icon: BarChart,
    title: "Marketing",
    description: "Digitalni marketing, SEO, društvene mreže i marketinške kampanje."
  },
  {
    icon: Globe,
    title: "Konzultacije",
    description: "Poslovno savjetovanje, projektni menadžment i stručne konzultacije."
  }
];

export default ServicesSection;
