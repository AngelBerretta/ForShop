import React from 'react';

const SalesChart: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-800 p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl lg:rounded-3xl shadow-soft dark:shadow-none dark:border dark:border-slate-700 relative h-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 lg:mb-8 gap-3">
        <div>
          <h3 className="text-base md:text-lg lg:text-xl font-bold text-slate-700 dark:text-slate-200">
            Sales Statistics
          </h3>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Monthly revenue and growth trends
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-xs md:text-sm">
            <div className="w-3 h-0.5 bg-blue-500"></div>
            <span className="text-slate-600 dark:text-slate-300">2024</span>
          </div>
          <div className="flex items-center gap-1 text-xs md:text-sm">
            <div className="w-3 h-0.5 bg-pink-500"></div>
            <span className="text-slate-600 dark:text-slate-300">2023</span>
          </div>
          <button className="flex items-center gap-1 text-xs md:text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors bg-slate-50 dark:bg-slate-700 px-2 md:px-3 py-1 rounded-lg">
            Monthly
            <span className="material-icons-outlined text-sm">expand_more</span>
          </button>
        </div>
      </div>
      
      <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
        <div className="absolute left-0 top-0 bottom-4 md:bottom-6 lg:bottom-8 flex flex-col justify-between text-[10px] md:text-xs text-slate-400">
          <span>$100K</span>
          <span>$80K</span>
          <span>$60K</span>
          <span>$40K</span>
          <span>$20K</span>
          <span>$0</span>
        </div>
        
        <svg 
          className="w-full h-full pl-6 md:pl-8 lg:pl-10 pb-4 md:pb-6 lg:pb-8 overflow-visible" 
          viewBox="0 0 500 200" 
          preserveAspectRatio="xMidYMid meet"
        >
          <g className="chart-grid">
            {[0, 40, 80, 120, 160, 200].map((y, i) => (
              <line 
                key={i}
                opacity="0.3" 
                strokeWidth="1" 
                x1="0" 
                x2="500" 
                y1={y} 
                y2={y}
              />
            ))}
          </g>
          
          {/* Línea 2024 */}
          <path
            d="M0,150 C50,130 100,120 150,110 C200,100 250,90 300,50 C350,10 400,20 500,40"
            fill="none"
            stroke="#60a5fa"
            strokeLinecap="round"
            strokeWidth="2.5"
          />
          
          {/* Línea 2023 */}
          <path
            d="M0,170 C50,150 100,150 150,130 C200,110 250,120 300,80 C350,40 400,60 500,20"
            fill="none"
            stroke="#f472b6"
            strokeLinecap="round"
            strokeWidth="2.5"
          />
          
          {/* Tooltip hover (solo en desktop) */}
          <g className="hidden lg:block" transform="translate(250, 75)">
            <rect fill="#4338ca" height="45" rx="8" width="120" x="-60" y="-55" />
            <text fill="#a5b4fc" fontSize="9" textAnchor="middle" x="0" y="-35">
              10.06 - 17.06.2024
            </text>
            <text fill="white" fontSize="11" fontWeight="bold" textAnchor="middle" x="0" y="-20">
              $ 7,320.89
            </text>
            <circle cx="0" cy="5" fill="#4338ca" r="5" stroke="white" strokeWidth="2" />
            <line stroke="#4338ca" strokeDasharray="4" strokeWidth="1" x1="0" x2="0" y1="5" y2="125" />
          </g>
          
          {/* Puntos en las líneas */}
          <circle className="dark:stroke-slate-800" cx="150" cy="110" fill="#60a5fa" r="3.5" stroke="white" strokeWidth="2" />
          <circle className="dark:stroke-slate-800" cx="150" cy="130" fill="#f472b6" r="3.5" stroke="white" strokeWidth="2" />
          <circle className="dark:stroke-slate-800" cx="300" cy="50" fill="#60a5fa" r="3.5" stroke="white" strokeWidth="2" />
          <circle className="dark:stroke-slate-800" cx="300" cy="80" fill="#f472b6" r="3.5" stroke="white" strokeWidth="2" />
        </svg>
        
        <div className="absolute left-6 md:left-8 lg:left-10 right-0 bottom-0 flex justify-between text-[10px] md:text-xs text-slate-400 px-2 md:px-4">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
        </div>
      </div>
      
      {/* Leyenda responsiva */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-4 md:mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-blue-500"></div>
          <span className="text-xs md:text-sm text-slate-600 dark:text-slate-300">Current Year</span>
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">+24%</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-pink-500"></div>
          <span className="text-xs md:text-sm text-slate-600 dark:text-slate-300">Previous Year</span>
          <span className="text-xs font-semibold text-pink-600 dark:text-pink-400">+18%</span>
        </div>
      </div>
    </div>
  );
};

export default SalesChart;