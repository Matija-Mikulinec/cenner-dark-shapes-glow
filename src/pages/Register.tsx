
import React, { useState } from "react";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import NetworkBackground from '@/components/NetworkBackground';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    city: ''
  });
  const { t } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration attempt:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative py-8">
      <NetworkBackground />
      <div className="w-full max-w-lg glass-card p-8 rounded-xl shadow-2xl z-10 mx-4">
        <h1 className="text-3xl font-bold mb-6 text-center">{t('registerTitle')}</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-2">{t('fullName')}</label>
            <Input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder={t('fullName')} 
              className="glass-button"
              required
            />
          </div>
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
            <label className="block text-sm font-medium mb-2">{t('phone')}</label>
            <Input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+385 99 123 4567" 
              className="glass-button"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">{t('address')}</label>
              <Input 
                type="text" 
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder={t('address')} 
                className="glass-button"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{t('city')}</label>
              <Input 
                type="text" 
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder={t('city')} 
                className="glass-button"
                required
              />
            </div>
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
            {t('signUp')}
          </Button>
        </form>
        <p className="mt-6 text-sm text-muted-foreground text-center">
          {t('alreadyHaveAccount')} <Link to="/login" className="text-primary hover:underline">{t('signIn')}</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
