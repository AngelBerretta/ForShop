import React from 'react';

interface HeaderProps {
  userName: string;
  toggleSidebar: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ userName, toggleSidebar, onLogout }) => {
  return (
    <header className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6 bg-transparent z-10">
      <div className="flex items-center gap-4">
        <button
          className="lg:hidden text-slate-600 dark:text-slate-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          onClick={toggleSidebar}
        >
          <span className="material-icons-outlined">menu</span>
        </button>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
            Welcome, {userName}
          </h2>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
            Here is what's happening with your store today.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-6">
        <div className="relative">
          <div className="hidden sm:block">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400">
              search
            </span>
            <input
              className="pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border-none rounded-full text-sm w-40 md:w-64 shadow-sm focus:ring-2 focus:ring-primary dark:text-white"
              placeholder="Search..."
              type="text"
            />
          </div>
          <button className="sm:hidden p-2 rounded-full bg-white dark:bg-slate-800 shadow-sm text-slate-600 dark:text-slate-300">
            <span className="material-icons-outlined">search</span>
          </button>
        </div>
        <button className="relative p-2 rounded-full bg-white dark:bg-slate-800 shadow-sm text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
          <span className="material-icons-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-slate-800"></span>
        </button>
        
        {/* Profile Dropdown */}
        <div className="relative group">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-white dark:border-slate-700 shadow-sm cursor-pointer">
            <img
              alt="User Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGddC5rlztlqOdwksP0l31CiO0OJoY9FKCBbmnIW42pFsDpsYDDyUBlzwpZi-FxNQHgCzEDs-sOcp9i0J6OQYp7IQXqiNlPHTPx0sEOiEr0-ksxDtJgtIrA817Spbog6bOuOefw5vbPgysitQjq99NbXg6E9VM0OZnC8rDoxT3pbJMt8i4sugZQy_HpW_hjMgi7nWroOL2Oq9ovKw06u071YkV18i4a3V2jajuhxHlXpxFKK-d20OqdpQxyqqw0WMd2IfSbA9Hkko"
            />
          </div>
          
          {/* Dropdown Menu */}
          <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-2xl py-2 border border-slate-200 dark:border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-800 dark:text-white">{userName}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">admin@forshop.com</p>
            </div>
            <button className="w-full px-4 py-2 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2">
              <span className="material-icons-outlined text-sm">account_circle</span>
              Profile Settings
            </button>
            <button className="w-full px-4 py-2 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2">
              <span className="material-icons-outlined text-sm">settings</span>
              Account Settings
            </button>
            <div className="border-t border-slate-200 dark:border-slate-700 my-1"></div>
            <button
              onClick={onLogout}
              className="w-full px-4 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-2"
            >
              <span className="material-icons-outlined text-sm">logout</span>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;