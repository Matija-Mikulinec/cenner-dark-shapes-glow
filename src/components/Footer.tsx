
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/30 pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Logo />
            <p className="mt-4 text-gray-400 mb-4">
              Platforma koja povezuje profesionalce i klijente na jednostavan način.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Facebook size={20} />} href="https://facebook.com" />
              <SocialLink icon={<Twitter size={20} />} href="https://twitter.com" />
              <SocialLink icon={<Instagram size={20} />} href="https://instagram.com" />
              <SocialLink icon={<Linkedin size={20} />} href="https://linkedin.com" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Brzi linkovi</h3>
            <ul className="space-y-3">
              <FooterLink href="/" label="Početna" />
              <FooterLink href="/about" label="O nama" />
              <FooterLink href="/services" label="Usluge" />
              <FooterLink href="/jobs" label="Poslovi" />
              <FooterLink href="/contact" label="Kontakt" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Pravno</h3>
            <ul className="space-y-3">
              <FooterLink href="/terms" label="Uvjeti korištenja" />
              <FooterLink href="/privacy" label="Zaštita privatnosti" />
              <FooterLink href="/cookies" label="Kolačići" />
              <FooterLink href="/faq" label="Česta pitanja" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-cenner" />
                <span className="text-gray-400">info@cenner.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-cenner" />
                <span className="text-gray-400">+385 1 234 5678</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-cenner" />
                <span className="text-gray-400">
                  Ulica grada Vukovara 269d<br />
                  10000 Zagreb, Hrvatska
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Cenner. Sva prava pridržana.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, href }: { icon: React.ReactNode, href: string }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-cenner/20 text-gray-400 hover:text-white transition-colors"
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ href, label }: { href: string, label: string }) => {
  return (
    <li>
      <Link 
        to={href} 
        className="text-gray-400 hover:text-white transition-colors"
      >
        {label}
      </Link>
    </li>
  );
};

export default Footer;
