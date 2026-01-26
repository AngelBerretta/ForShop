import React from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarItem {
  icon: string;
  label: string;
  path: string;
}

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const navItems: SidebarItem[] = [
    { icon: 'dashboard', label: 'Dashboard', path: '/' },
    { icon: 'receipt_long', label: 'Orders', path: '/orders' },
    { icon: 'checkroom', label: 'Products', path: '/products' },
    { icon: 'campaign', label: 'Marketing', path: '/marketing' },
    { icon: 'star_border', label: 'Rates', path: '/rates' },
    { icon: 'description', label: 'Reports', path: '/reports' },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:relative h-screen z-50 transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } w-64 flex-shrink-0 flex flex-col justify-between py-8 px-6 bg-sidebar dark:bg-sidebar-dark`}
      >
        <div>
          <div className="flex items-center justify-between gap-3 text-white mb-12">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                <span className="material-icons-outlined text-sm">shopping_bag</span>
              </div>
              <h1 className="text-xl font-bold tracking-wide">ForShop</h1>
            </div>
            <button
              className="lg:hidden text-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="material-icons-outlined">close</span>
            </button>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 rounded-xl transition-colors ${
                    isActive
                      ? 'bg-white text-primary font-medium shadow-lg'
                      : 'text-indigo-100 hover:bg-indigo-700/50 dark:text-indigo-200 dark:hover:bg-indigo-900/50'
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                <span className="material-icons-outlined">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="text-xs text-indigo-300 text-center">
          © 2024 ForShop Inc.
        </div>
      </aside>
    </>
  );
};

export default Sidebar;