
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CircleCheck, Zap, Coins, Heart } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-cenner/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Zašto odabrati Cenner?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Naša platforma povezuje talente i prilike na jednostavan i učinkovit način
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="glass-card bg-gradient-to-br from-cenner/5 to-white/5 hover:from-cenner/10 hover:to-white/10 transition-all duration-500 border-white/10 h-full overflow-hidden">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-cenner/10 text-cenner mr-4">
                    <benefit.icon size={24} strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-semibold">{benefit.title}</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed flex-grow">
                  {benefit.description}
                </p>
                {benefit.bullets && (
                  <ul className="mt-4 space-y-2">
                    {benefit.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start">
                        <CircleCheck className="mr-2 text-cenner-light h-5 w-5 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const benefits = [
  {
    icon: Zap,
    title: "Brzo i jednostavno",
    description: "Pronađite idealne profesionalce ili poslove u svega nekoliko klikova. Naš inteligentni algoritam uparivanja osigurava najbolje rezultate za vaše potrebe.",
    bullets: [
      "Intuitivno sučelje za lakše snalaženje",
      "Pametno filtriranje prema vašim preferencijama", 
      "Brzo povezivanje s provjerenim stručnjacima"
    ]
  },
  {
    icon: Coins,
    title: "Povoljno i transparentno",
    description: "Bez skrivenih troškova ili visokih provizija. Plaćate samo za usluge koje koristite, uz potpunu transparentnost cijena i uvjeta.",
    bullets: [
      "Bez posredničkih naknada",
      "Jasan pregled svih troškova unaprijed",
      "Fleksibilni modeli plaćanja"
    ]
  },
  {
    icon: Heart,
    title: "Personalizirano iskustvo",
    description: "Platforma prilagođena vašim potrebama koja raste zajedno s vama. Dobivajte relevantne prijedloge i gradite svoj profesionalni profil.",
    bullets: [
      "Osobne preporuke na temelju vaših preferenci",
      "Prilagođeni feed poslova i stručnjaka",
      "Razvoj profesionalnog portfolija"
    ]
  },
  {
    icon: CircleCheck,
    title: "Sigurnost i kvaliteta",
    description: "Svi korisnici prolaze proces verifikacije, a sustav recenzija osigurava kvalitetu. Vaši podaci i transakcije potpuno su zaštićeni.",
    bullets: [
      "Verificirani profili stručnjaka",
      "Sustav recenzija i ocjenjivanja",
      "Sigurne transakcije i zaštita podataka"
    ]
  }
];

export default BenefitsSection;
