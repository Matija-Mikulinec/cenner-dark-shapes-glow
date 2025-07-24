
import React, { useState } from "react";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import NetworkBackground from '@/components/NetworkBackground';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { t } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative">
      <NetworkBackground />
      <div className="w-full max-w-md glass-card p-8 rounded-xl shadow-2xl z-10">
        <h1 className="text-3xl font-bold mb-6 text-center">{t('loginTitle')}</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-2">{t('email')}</label>
            <Input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('email')} 
              className="glass-button"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">{t('password')}</label>
            <Input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder={t('password')} 
              className="glass-button"
              required
            />
          </div>
          <Button type="submit" variant="liquid" className="w-full">
            {t('signIn')}
          </Button>
        </form>
        <p className="mt-6 text-sm text-muted-foreground text-center">
          {t('dontHaveAccount')} <Link to="/register" className="text-primary hover:underline">{t('signUp')}</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
