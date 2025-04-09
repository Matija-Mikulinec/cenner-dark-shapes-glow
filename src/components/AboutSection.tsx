
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Users, Gem, Clock } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ukratko o nama</h2>
          <div className="h-1 w-20 bg-cenner mx-auto rounded-full"></div>
        </div>

        <div className="glass-card p-8 rounded-2xl mb-12">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Cenner je inovativna platforma koja omogućuje poduzećima i freelancerima
            jednostavno povezivanje i suradnju. Naša misija je olakšati pronalazak lokalnih
            stručnjaka bez visokih provizija i skrivenih troškova. Bilo da tražite
            profesionalnog dizajnera, iskusnog programera ili talentiranog copywritera,
            Cenner vam omogućuje da brzo pronađete idealnog suradnika.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-secondary/50 border-white/5 overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 text-cenner">
                  <feature.icon size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    icon: ShieldCheck,
    title: "Sigurnost",
    description: "Provjereni korisnici i sigurne transakcije za bezbrižno poslovanje."
  },
  {
    icon: Users,
    title: "Povezivanje",
    description: "Brzo i jednostavno povezivanje s pravim profesionalcima za vaš projekt."
  },
  {
    icon: Gem,
    title: "Kvaliteta",
    description: "Pristup visokokvalitetnim uslugama uz transparentne recenzije."
  },
  {
    icon: Clock,
    title: "Brzina",
    description: "Uštedite vrijeme uz platformu optimiziranu za brzo pronalaženje usluga."
  }
];

export default AboutSection;
