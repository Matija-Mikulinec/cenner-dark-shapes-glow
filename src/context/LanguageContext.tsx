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
    
    // About
    aboutTitle: 'O nama',
    aboutSubtitle: 'Saznajte više o našoj kompaniji i misiji',
    
    // Services
    servicesTitle: 'Naše usluge',
    servicesSubtitle: 'Pružamo širok spektar digitalnih rješenja',
    
    // Benefits
    benefitsTitle: 'Zašto odabrati nas',
    benefitsSubtitle: 'Prednosti rada s našim timom',
    
    // Contact
    contactTitle: 'Kontakt',
    contactInfo: 'Kontakt informacije',
    sendMessage: 'Pošaljite poruku',
    subject: 'Predmet',
    message: 'Poruka',
    addressLabel: 'Adresa',
    workingHours: 'Radno vrijeme',
    
    // Forms
    loginTitle: 'Prijava',
    registerTitle: 'Registracija',
    alreadyHaveAccount: 'Već imate račun?',
    dontHaveAccount: 'Nemate račun?',
    signIn: 'Prijavite se',
    signUp: 'Registrirajte se',
    
    // Footer
    allRightsReserved: 'Sva prava zadržana',
    
    // CTA
    ctaTitle: 'Spremni za početak?',
    ctaSubtitle: 'Kontaktirajte nas danas i pokrenimo vaš projekt',
    contactUs: 'Kontaktirajte nas',
    
    // About page
    aboutDescription1: 'Cenner je inovativna platforma koja omogućuje poduzećima i freelancerima jednostavno povezivanje i suradnju. Naša misija je olakšati pronalazak lokalnih stručnjaka bez visokih provizija i skrivenih troškova.',
    aboutDescription2: 'Bilo da tražite profesionalnog dizajnera, iskusnog programera ili talentiranog copywritera, Cenner vam omogućuje da brzo pronađete idealnog suradnika. S transparentnim sustavom projekata, poruka i praćenja rada, osiguravamo kvalitetno iskustvo za sve korisnike naše platforme.',
    ourStory: 'Naša Priča',
    ourBeginnings: 'Naši Počeci',
    beginningsDescription: 'Cenner je nastao 2023. godine iz potrebe za jednostavnijim povezivanjem lokalnih stručnjaka i klijenata. Uvidjeli smo da postojeće platforme nisu dovoljno prilagođene specifičnim potrebama hrvatskog tržišta i odlučili smo stvoriti rješenje koje će podržavati lokalne talente.',
    ourVision: 'Naša Vizija',
    visionDescription: 'Želimo stvoriti najveću mrežu profesionalaca u regiji koja će omogućiti svakom talentu da pronađe prilike za rad, a klijentima pristup do najboljih stručnjaka za njihove projekte, sve to uz fer uvjete i transparentne procese.',
    
    // Contact page
    workingHoursDetail: 'Pon - Pet: 9:00 - 17:00\nSub - Ned: Zatvoreno',
    
    // Offer page
    offerDescription: 'Pregledajte aktualne usluge, projekte i mogućnosti koje Cenner nudi. Pronađite idealnu priliku za razvoj svojih vještina ili širenje poslovanja.',
    webDevelopment: 'Web Razvoj',
    webDevelopmentDesc: 'Modernije web stranice i aplikacije izgrađene s najnovijim tehnologijama',
    mobileApps: 'Mobilne Aplikacije',
    mobileAppsDesc: 'Native i cross-platform mobilne aplikacije za iOS i Android',
    design: 'Dizajn',
    designDesc: 'UI/UX dizajn, branding i vizualni identitet za vaš biznis',
    digitalMarketing: 'Digitalni Marketing',
    digitalMarketingDesc: 'SEO, Google Ads, Facebook Ads i strategije digitalnog marketinga',
    seoOptimization: 'SEO Optimizacija',
    seoOptimizationDesc: 'Poboljšanje vidljivosti na Google i drugim tražilicama',
    analytics: 'Analitika',
    analyticsDesc: 'Praćenje performansi web stranice i kampanja',
    priceFrom: 'Od ',
    readyToStart: 'Spremni za početak?',
    contactUsDescription: 'Kontaktirajte nas danas za besplatnu konzultaciju i pokrenimo vaš projekt',
    freeConsultation: 'Besplatna konzultacija',
    
    // Auth
    loginSuccess: 'Uspješna prijava',
    welcomeBack: 'Dobrodošli natrag!',
    loginError: 'Greška pri prijavi',
    registrationSuccess: 'Uspješna registracija',
    welcomeMessage: 'Dobrodošli na Cenner!',
    registrationError: 'Greška pri registraciji',
    genericError: 'Dogodila se greška. Pokušajte ponovo.',
    loading: 'Učitava...',
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
    
    // About
    aboutTitle: 'About Us',
    aboutSubtitle: 'Learn more about our company and mission',
    
    // Services
    servicesTitle: 'Our Services',
    servicesSubtitle: 'We provide a wide range of digital solutions',
    
    // Benefits
    benefitsTitle: 'Why Choose Us',
    benefitsSubtitle: 'Benefits of working with our team',
    
    // Contact
    contactTitle: 'Contact',
    contactInfo: 'Contact Information',
    sendMessage: 'Send Message',
    subject: 'Subject',
    message: 'Message',
    addressLabel: 'Address',
    workingHours: 'Working Hours',
    
    // Forms
    loginTitle: 'Login',
    registerTitle: 'Registration',
    alreadyHaveAccount: 'Already have an account?',
    dontHaveAccount: "Don't have an account?",
    signIn: 'Sign In',
    signUp: 'Sign Up',
    
    // Footer
    allRightsReserved: 'All rights reserved',
    
    // CTA
    ctaTitle: 'Ready to Get Started?',
    ctaSubtitle: 'Contact us today and let\'s launch your project',
    contactUs: 'Contact Us',
    
    // About page
    aboutDescription1: 'Cenner is an innovative platform that enables companies and freelancers to easily connect and collaborate. Our mission is to facilitate finding local experts without high commissions and hidden costs.',
    aboutDescription2: 'Whether you are looking for a professional designer, experienced programmer or talented copywriter, Cenner allows you to quickly find the ideal collaborator. With a transparent system of projects, messages and work tracking, we ensure a quality experience for all users of our platform.',
    ourStory: 'Our Story',
    ourBeginnings: 'Our Beginnings',
    beginningsDescription: 'Cenner was created in 2023 from the need for simpler connection of local experts and clients. We realized that existing platforms are not sufficiently adapted to the specific needs of the Croatian market and decided to create a solution that will support local talents.',
    ourVision: 'Our Vision',
    visionDescription: 'We want to create the largest network of professionals in the region that will enable every talent to find work opportunities, and clients access to the best experts for their projects, all with fair conditions and transparent processes.',
    
    // Contact page
    workingHoursDetail: 'Mon - Fri: 9:00 - 17:00\nSat - Sun: Closed',
    
    // Offer page
    offerDescription: 'Browse current services, projects and opportunities that Cenner offers. Find the ideal opportunity to develop your skills or expand your business.',
    webDevelopment: 'Web Development',
    webDevelopmentDesc: 'Modern websites and applications built with the latest technologies',
    mobileApps: 'Mobile Applications',
    mobileAppsDesc: 'Native and cross-platform mobile applications for iOS and Android',
    design: 'Design',
    designDesc: 'UI/UX design, branding and visual identity for your business',
    digitalMarketing: 'Digital Marketing',
    digitalMarketingDesc: 'SEO, Google Ads, Facebook Ads and digital marketing strategies',
    seoOptimization: 'SEO Optimization',
    seoOptimizationDesc: 'Improving visibility on Google and other search engines',
    analytics: 'Analytics',
    analyticsDesc: 'Website and campaign performance tracking',
    priceFrom: 'From ',
    readyToStart: 'Ready to Get Started?',
    contactUsDescription: 'Contact us today for a free consultation and let\'s launch your project',
    freeConsultation: 'Free Consultation',
    
    // Auth
    loginSuccess: 'Login Successful',
    welcomeBack: 'Welcome back!',
    loginError: 'Login Error',
    registrationSuccess: 'Registration Successful',
    welcomeMessage: 'Welcome to Cenner!',
    registrationError: 'Registration Error',
    genericError: 'An error occurred. Please try again.',
    loading: 'Loading...',
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