import React from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="glass"
      size="sm"
      onClick={() => setLanguage(language === 'hr' ? 'en' : 'hr')}
      className="gap-2"
    >
      <Globe size={16} />
      {language === 'hr' ? 'EN' : 'HR'}
    </Button>
  );
};

export default LanguageSwitch;