
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GeometricShapes from '@/components/GeometricShapes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <GeometricShapes />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Kontakt</h1>
          <div className="h-1 w-20 bg-cenner mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="lg:col-span-1">
              <div className="glass-card rounded-xl p-8 h-full">
                <h2 className="text-2xl font-bold mb-6">Kontakt informacije</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="mr-3 text-cenner" size={24} />
                    <div>
                      <h3 className="font-medium">Adresa</h3>
                      <p className="text-gray-400 mt-1">
                        Ulica grada Vukovara 269d<br />
                        10000 Zagreb, Hrvatska
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="mr-3 text-cenner" size={24} />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-400 mt-1">info@cenner.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="mr-3 text-cenner" size={24} />
                    <div>
                      <h3 className="font-medium">Telefon</h3>
                      <p className="text-gray-400 mt-1">+385 1 234 5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="mr-3 text-cenner" size={24} />
                    <div>
                      <h3 className="font-medium">Radno vrijeme</h3>
                      <p className="text-gray-400 mt-1">
                        Pon - Pet: 9:00 - 17:00<br />
                        Sub - Ned: Zatvoreno
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <form className="glass-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Pošaljite poruku</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Ime i prezime</label>
                    <Input id="name" className="bg-white/5 border-white/10" placeholder="Vaše ime i prezime" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email adresa</label>
                    <Input id="email" type="email" className="bg-white/5 border-white/10" placeholder="vasa.adresa@email.com" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Predmet</label>
                  <Input id="subject" className="bg-white/5 border-white/10" placeholder="Tema vaše poruke" />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Poruka</label>
                  <Textarea id="message" className="bg-white/5 border-white/10 min-h-32" placeholder="Napišite vašu poruku ovdje..." />
                </div>
                
                <Button className="bg-cenner hover:bg-cenner-dark text-white w-full">Pošalji poruku</Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
