import { useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setAuthState({
        user: JSON.parse(storedUser),
        isAuthenticated: true,
        isLoading: false,
      });
    } else {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const login = (email: string, password: string): Promise<{ success: boolean; message: string }> => {
    return new Promise((resolve) => {
      // Simulate API call
      setTimeout(() => {
        if (email && password) {
          const user = {
            id: '1',
            email,
            name: email.split('@')[0],
          };
          
          localStorage.setItem('user', JSON.stringify(user));
          setAuthState({
            user,
            isAuthenticated: true,
            isLoading: false,
          });
          
          resolve({ success: true, message: 'Login successful' });
        } else {
          resolve({ success: false, message: 'Invalid credentials' });
        }
      }, 1000);
    });
  };

  const register = (userData: { 
    fullName: string; 
    email: string; 
    password: string; 
    phone?: string;
    address?: string;
    city?: string;
  }): Promise<{ success: boolean; message: string }> => {
    return new Promise((resolve) => {
      // Simulate API call
      setTimeout(() => {
        if (userData.email && userData.password && userData.fullName) {
          const user = {
            id: '1',
            email: userData.email,
            name: userData.fullName,
          };
          
          localStorage.setItem('user', JSON.stringify(user));
          setAuthState({
            user,
            isAuthenticated: true,
            isLoading: false,
          });
          
          resolve({ success: true, message: 'Registration successful' });
        } else {
          resolve({ success: false, message: 'Please fill all required fields' });
        }
      }, 1000);
    });
  };

  const logout = () => {
    localStorage.removeItem('user');
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  return {
    ...authState,
    login,
    register,
    logout,
  };
};