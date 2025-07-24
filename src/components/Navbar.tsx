
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import LanguageSwitch from './LanguageSwitch';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLinks />
            <div className="flex items-center space-x-3">
              <LanguageSwitch />
              <Button variant="glass" asChild>
                <Link to="/login">{t('login')}</Link>
              </Button>
              <Button variant="liquid" asChild>
                <Link to="/register">{t('register')}</Link>
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white p-2"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed top-[72px] left-0 right-0 h-screen bg-background z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
          <div className="flex flex-col space-y-6">
            <MobileNavLinks closeMenu={() => setIsMenuOpen(false)} />
          </div>
          <div className="flex flex-col space-y-4 pt-4">
            <LanguageSwitch />
            <Button variant="glass" asChild>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>{t('login')}</Link>
            </Button>
            <Button variant="liquid" asChild>
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>{t('register')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLinks = () => {
  const { t } = useLanguage();
  return (
    <>
      <Link to="/" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">
        {t('home')}
      </Link>
      <Link to="/about" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">
        {t('about')}
      </Link>
      <Link to="/offer" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">
        {t('offer')}
      </Link>
      <Link to="/contact" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">
        {t('contact')}
      </Link>
    </>
  );
};

const MobileNavLinks = ({ closeMenu }: { closeMenu: () => void }) => {
  const { t } = useLanguage();
  return (
    <>
      <Link to="/" className="text-xl text-gray-300 hover:text-white transition-all duration-300" onClick={closeMenu}>
        {t('home')}
      </Link>
      <Link to="/about" className="text-xl text-gray-300 hover:text-white transition-all duration-300" onClick={closeMenu}>
        {t('about')}
      </Link>
      <Link to="/offer" className="text-xl text-gray-300 hover:text-white transition-all duration-300" onClick={closeMenu}>
        {t('offer')}
      </Link>
      <Link to="/contact" className="text-xl text-gray-300 hover:text-white transition-all duration-300" onClick={closeMenu}>
        {t('contact')}
      </Link>
    </>
  );
};

export default Navbar;
