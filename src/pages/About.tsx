
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GeometricShapes from '@/components/GeometricShapes';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <GeometricShapes />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">O nama</h1>
          <div className="h-1 w-20 bg-cenner mx-auto mb-12 rounded-full"></div>
          
          <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto mb-12">
            <p className="text-lg leading-relaxed mb-6">
              Cenner je inovativna platforma koja omogućuje poduzećima i freelancerima
              jednostavno povezivanje i suradnju. Naša misija je olakšati pronalazak lokalnih
              stručnjaka bez visokih provizija i skrivenih troškova.
            </p>
            <p className="text-lg leading-relaxed">
              Bilo da tražite profesionalnog dizajnera, iskusnog programera ili talentiranog 
              copywritera, Cenner vam omogućuje da brzo pronađete idealnog suradnika. S 
              transparentnim sustavom projekata, poruka i praćenja rada, osiguravamo 
              kvalitetno iskustvo za sve korisnike naše platforme.
            </p>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mt-16 mb-8 text-center">Naša Priča</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-cenner">Naši Počeci</h3>
              <p className="text-gray-300">
                Cenner je nastao 2023. godine iz potrebe za jednostavnijim povezivanjem lokalnih 
                stručnjaka i klijenata. Uvidjeli smo da postojeće platforme nisu dovoljno prilagođene 
                specifičnim potrebama hrvatskog tržišta i odlučili smo stvoriti rješenje koje će 
                podržavati lokalne talente.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 text-cenner">Naša Vizija</h3>
              <p className="text-gray-300">
                Želimo stvoriti najveću mrežu profesionalaca u regiji koja će omogućiti 
                svakom talentu da pronađe prilike za rad, a klijentima pristup do najboljih 
                stručnjaka za njihove projekte, sve to uz fer uvjete i transparentne procese.
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
