
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GeometricShapes from '@/components/GeometricShapes';
import NetworkBackground from '@/components/NetworkBackground';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage, LanguageProvider } from '@/context/LanguageContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Poruka poslana!",
      description: "Javit ćemo vam se u najkraćem mogućem roku.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <NetworkBackground />
        <GeometricShapes />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">{t('contactTitle')}</h1>
          <div className="h-1 w-20 liquid-gradient mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="lg:col-span-1">
              <div className="glass-card rounded-xl p-8 h-full">
                <h2 className="text-2xl font-bold mb-6">{t('contactInfo')}</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="mr-3 text-primary" size={24} />
                    <div>
                      <h3 className="font-medium">Adresa</h3>
                      <p className="text-gray-400 mt-1">
                        Ulica grada Vukovara 269d<br />
                        10000 Zagreb, Hrvatska
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="mr-3 text-primary" size={24} />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-400 mt-1">info@cenner.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="mr-3 text-primary" size={24} />
                    <div>
                      <h3 className="font-medium">Telefon</h3>
                      <p className="text-gray-400 mt-1">+385 1 234 5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="mr-3 text-primary" size={24} />
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
              <form className="glass-card rounded-xl p-8" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6">{t('sendMessage')}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">{t('fullName')}</label>
                    <Input 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="glass-button" 
                      placeholder={t('fullName')}
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">{t('email')}</label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="glass-button" 
                      placeholder="your.email@example.com"
                      required 
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">{t('subject')}</label>
                  <Input 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="glass-button" 
                    placeholder={t('subject')}
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">{t('message')}</label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="glass-button min-h-32" 
                    placeholder={t('message')}
                    required 
                  />
                </div>
                
                <Button type="submit" variant="liquid" className="w-full">{t('submit')}</Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Contact;
