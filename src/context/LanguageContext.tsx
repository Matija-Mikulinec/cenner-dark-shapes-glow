import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'hr' | 'en';
  setLanguage: (lang: 'hr' | 'en') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  hr: {
    // Navigation
    home: 'Početna',
    about: 'O nama',
    offer: 'Ponuda',
    contact: 'Kontakt',
    login: 'Prijava',
    register: 'Registracija',
    
    // Common
    email: 'Email',
    password: 'Lozinka',
    fullName: 'Ime i prezime',
    phone: 'Telefon',
    address: 'Adresa',
    city: 'Grad',
    submit: 'Pošalji',
    
    // Hero
    heroTitle: 'Cenner - Vaš partner za digitalne inovacije',
    heroSubtitle: 'Kreiramo web stranice, aplikacije i digitalna rješenja koja pokreću vaš biznis prema uspjehu.',
    getStarted: 'Počnite sada',
    learnMore: 'Saznajte više',
    
    // Contact
    contactTitle: 'Kontakt',
    contactInfo: 'Kontakt informacije',
    sendMessage: 'Pošaljite poruku',
    subject: 'Predmet',
    message: 'Poruka',
    
    // Forms
    loginTitle: 'Prijava',
    registerTitle: 'Registracija',
    alreadyHaveAccount: 'Već imate račun?',
    dontHaveAccount: 'Nemate račun?',
    signIn: 'Prijavite se',
    signUp: 'Registrirajte se',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    offer: 'Services',
    contact: 'Contact',
    login: 'Login',
    register: 'Register',
    
    // Common
    email: 'Email',
    password: 'Password',
    fullName: 'Full Name',
    phone: 'Phone',
    address: 'Address',
    city: 'City',
    submit: 'Submit',
    
    // Hero
    heroTitle: 'Cenner - Your Digital Innovation Partner',
    heroSubtitle: 'We create websites, applications and digital solutions that drive your business to success.',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    
    // Contact
    contactTitle: 'Contact',
    contactInfo: 'Contact Information',
    sendMessage: 'Send Message',
    subject: 'Subject',
    message: 'Message',
    
    // Forms
    loginTitle: 'Login',
    registerTitle: 'Registration',
    alreadyHaveAccount: 'Already have an account?',
    dontHaveAccount: "Don't have an account?",
    signIn: 'Sign In',
    signUp: 'Sign Up',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'hr' | 'en'>('hr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.hr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};