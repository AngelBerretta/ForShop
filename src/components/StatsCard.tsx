import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  gradientFrom: string;
  gradientTo: string;
  compact?: boolean; // Nueva prop para diseño compacto
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  icon,
  iconBg,
  iconColor,
  gradientFrom,
  gradientTo,
  compact = false,
}) => {
  return (
    <div
      className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} dark:from-slate-800 dark:to-slate-800 dark:border dark:border-slate-700 ${
        compact ? 'p-3 md:p-4 rounded-xl' : 'p-4 md:p-6 rounded-2xl md:rounded-3xl'
      } flex items-center gap-3 md:gap-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5`}
    >
      <div className={`${compact ? 'w-10 h-10 md:w-12 md:h-12 rounded-lg' : 'w-12 h-12 md:w-14 md:h-14 rounded-xl'} ${iconBg} flex items-center justify-center ${iconColor} shadow-sm flex-shrink-0`}>
        <span className={`material-icons-outlined ${compact ? 'text-base md:text-lg' : 'text-lg md:text-xl'}`}>
          {icon}
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1 md:gap-2 flex-wrap">
          <h3 className={`font-bold text-slate-800 dark:text-white ${
            compact ? 'text-lg md:text-xl' : 'text-xl md:text-2xl lg:text-3xl'
          } truncate`}>
            {value}
          </h3>
          <span className={`${compact ? 'text-[10px] md:text-xs' : 'text-xs md:text-sm'} bg-slate-800 dark:bg-cyan-500 text-white dark:text-slate-900 px-1.5 md:px-2 py-0.5 md:py-1 rounded font-semibold whitespace-nowrap`}>
            {change}
          </span>
        </div>
        <p className={`${compact ? 'text-xs md:text-sm' : 'text-sm md:text-base'} text-slate-500 dark:text-slate-400 font-medium truncate mt-0.5`}>
          {title}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;