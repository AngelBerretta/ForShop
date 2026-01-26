import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { User, LoginCredentials, AuthState } from '../types/auth';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Usuario demo para pruebas
const DEMO_USER: User = {
  id: '1',
  name: 'Damian',
  email: 'admin@forshop.com',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGddC5rlztlqOdwksP0l31CiO0OJoY9FKCBbmnIW42pFsDpsYDDyUBlzwpZi-FxNQHgCzEDs-sOcp9i0J6OQYp7IQXqiNlPHTPx0sEOiEr0-ksxDtJgtIrA817Spbog6bOuOefw5vbPgysitQjq99NbXg6E9VM0OZnC8rDoxT3pbJMt8i4sugZQy_HpW_hjMgi7nWroOL2Oq9ovKw06u071YkV18i4a3V2jajuhxHlXpxFKK-d20OqdpQxyqqw0WMd2IfSbA9Hkko',
  role: 'admin',
  lastLogin: new Date().toISOString(),
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(() => {
    // Intentar cargar desde localStorage
    const storedToken = localStorage.getItem('auth_token');
    const storedUser = localStorage.getItem('auth_user');
    
    if (storedToken && storedUser) {
      return {
        user: JSON.parse(storedUser),
        token: storedToken,
        isAuthenticated: true,
        isLoading: false,
      };
    }
    
    return {
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
    };
  });

  useEffect(() => {
    if (authState.user && authState.token) {
      localStorage.setItem('auth_token', authState.token);
      localStorage.setItem('auth_user', JSON.stringify(authState.user));
    } else {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth_user');
    }
  }, [authState.user, authState.token]);

  const login = async (credentials: LoginCredentials): Promise<void> => {
    setAuthState(prev => ({ ...prev, isLoading: true }));

    // Simular API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Validación básica
    if (credentials.email === 'admin@forshop.com' && credentials.password === 'password123') {
      const token = 'demo_jwt_token_' + Math.random().toString(36).substr(2);
      const user = { ...DEMO_USER, lastLogin: new Date().toISOString() };
      
      if (credentials.rememberMe) {
        localStorage.setItem('auth_token', token);
        localStorage.setItem('auth_user', JSON.stringify(user));
      }

      setAuthState({
        user,
        token,
        isAuthenticated: true,
        isLoading: false,
      });
    } else {
      setAuthState(prev => ({ ...prev, isLoading: false }));
      throw new Error('Invalid email or password');
    }
  };

  const logout = () => {
    setAuthState({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
    });
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
  };

  const updateUser = (userData: Partial<User>) => {
    if (authState.user) {
      const updatedUser = { ...authState.user, ...userData };
      setAuthState(prev => ({ ...prev, user: updatedUser }));
      localStorage.setItem('auth_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};