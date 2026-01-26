import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
  actionButton?: {
    label: string;
    onClick: () => void;
    icon: string;
  };
  stats?: Array<{
    label: string;
    value: string;
    change: string;
  }>;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  description, 
  actionButton,
  stats 
}) => {
  return (
    <div className="mb-6 md:mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 md:mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">
            {title}
          </h1>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">
            {description}
          </p>
        </div>
        {actionButton && (
          <button
            onClick={actionButton.onClick}
            className="inline-flex items-center gap-2 bg-primary hover:bg-indigo-700 text-white font-medium py-2 px-4 md:px-6 rounded-lg transition-colors shadow-sm"
          >
            <span className="material-icons-outlined">{actionButton.icon}</span>
            <span>{actionButton.label}</span>
          </button>
        )}
      </div>
      
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm dark:border dark:border-slate-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
                  <p className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mt-1">
                    {stat.value}
                  </p>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-lg ${
                  stat.change.startsWith('+') 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                }`}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PageHeader;