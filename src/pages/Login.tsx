import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const Login: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`${theme} transition-colors duration-300`}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-background-dark dark:to-slate-900 flex flex-col">
        {/* Header */}
        <header className="px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-slate-800 dark:text-white">
              <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center">
                <span className="material-icons-outlined text-primary text-sm">shopping_bag</span>
              </div>
              <span className="text-xl font-bold">ForShop</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
              >
                <span className="material-icons-outlined block dark:hidden">dark_mode</span>
                <span className="material-icons-outlined hidden dark:block">light_mode</span>
              </button>
              
              <a
                href="https://forshop.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
              >
                Visit Store
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl w-full">
            {/* Left Side - Login Form */}
            <div className="flex items-center justify-center">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 md:p-10 w-full max-w-lg">
                <LoginForm />
              </div>
            </div>

            {/* Right Side - Info & Graphics */}
            <div className="hidden lg:flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
                    Manage Your Store
                    <span className="block text-primary">Like a Pro</span>
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400">
                    Access powerful analytics, manage orders, track inventory, and boost your sales 
                    with our comprehensive e-commerce dashboard.
                  </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
                      <span className="material-icons-outlined text-blue-600 dark:text-blue-400">
                        analytics
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-800 dark:text-white mb-1">
                      Real-time Analytics
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Track sales and performance
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3">
                      <span className="material-icons-outlined text-green-600 dark:text-green-400">
                        inventory_2
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-800 dark:text-white mb-1">
                      Smart Inventory
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Automatic stock management
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-3">
                      <span className="material-icons-outlined text-purple-600 dark:text-purple-400">
                        campaign
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-800 dark:text-white mb-1">
                      Marketing Tools
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Campaigns and promotions
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mb-3">
                      <span className="material-icons-outlined text-amber-600 dark:text-amber-400">
                        support_agent
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-800 dark:text-white mb-1">
                      24/7 Support
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Always here to help
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-800 dark:text-white">15K+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Stores</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-800 dark:text-white">99.8%</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-800 dark:text-white">4.9★</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="px-6 py-4 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © 2024 ForShop Inc. All rights reserved.
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Login;