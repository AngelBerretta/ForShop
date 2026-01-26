import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} transition-colors duration-300`}>
      <div className="bg-sidebar dark:bg-sidebar-dark text-slate-800 dark:text-slate-100 font-display h-screen flex overflow-hidden selection:bg-indigo-500 selection:text-white">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 bg-background-light dark:bg-background-dark my-2 md:my-4 mr-2 md:mr-4 rounded-2xl md:rounded-4xl shadow-xl md:shadow-2xl overflow-hidden flex flex-col relative ">
          <Header 
            userName="Damian" 
            toggleSidebar={() => setSidebarOpen(true)}
            onLogout={handleLogout}
          />
          <div className="flex-1 overflow-y-auto p-4 md:p-8 pt-0 md:pt-2">
            <Outlet />
          </div>
        </main>
        <div className="fixed bottom-4 right-4 z-50">
          <button
            className="p-3 bg-slate-800 dark:bg-white text-white dark:text-slate-800 rounded-full shadow-lg hover:scale-110 transition-transform"
            onClick={toggleDarkMode}
          >
            <span className="material-icons-outlined block dark:hidden">dark_mode</span>
            <span className="material-icons-outlined hidden dark:block">light_mode</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Layout;