
import React, { useState } from "react";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import LiquidBlobsBackground from '@/components/LiquidBlobsBackground';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useLanguage();
  const { login } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const result = await login(formData.email, formData.password);
      
      if (result.success) {
        toast({
          title: t('loginSuccess'),
          description: t('welcomeBack'),
        });
        navigate('/');
      } else {
        toast({
          title: t('loginError'),
          description: result.message,
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: t('loginError'),
        description: t('genericError'),
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative">
      <LiquidBlobsBackground />
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
          <Button type="submit" variant="liquid" className="w-full" disabled={isLoading}>
            {isLoading ? t('loading') : t('signIn')}
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
