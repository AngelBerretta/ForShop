// import React from 'react';

// const VisitorsChart: React.FC = () => {
//   const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
//   const visitors = [45, 52, 38, 24, 33, 48, 35]; // en miles

//   return (
//     <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-800 dark:border dark:border-slate-700 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-soft dark:shadow-none h-full relative overflow-hidden">
//       <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-100 dark:bg-indigo-900/30 rounded-full blur-3xl opacity-50"></div>
      
//       <div className="relative z-10">
//         <div className="flex items-center justify-between mb-3 md:mb-4">
//           <div>
//             <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-white">
//               Visitors
//             </h3>
//             <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
//               Unique visitors this week
//             </p>
//           </div>
//           <div className="flex items-center gap-1 text-xs md:text-sm font-semibold text-primary">
//             42.8K
//             <span className="text-green-600 dark:text-green-400 ml-1">↑12%</span>
//           </div>
//         </div>
        
//         <div className="relative h-32 md:h-40 mb-4 md:mb-6">
//           <div className="absolute left-0 top-0 bottom-4 flex flex-col justify-between text-[10px] md:text-xs text-slate-500 dark:text-slate-400">
//             <span>50K</span>
//             <span>40K</span>
//             <span>30K</span>
//             <span>20K</span>
//             <span>10K</span>
//           </div>
          
//           <div className="h-full pl-5 md:pl-6 pb-4 flex items-end gap-1 md:gap-2">
//             {visitors.map((count, index) => (
//               <div 
//                 key={index} 
//                 className="flex-1 flex flex-col items-center"
//               >
//                 <div 
//                   className="w-full bg-gradient-to-t from-primary to-indigo-400 rounded-t-lg transition-all duration-300 hover:opacity-80 cursor-pointer"
//                   style={{ height: `${(count / 52) * 100}%` }}
//                   title={`${count}K visitors`}
//                 />
//                 <span className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mt-1">
//                   {days[index]}
//                 </span>
//               </div>
//             ))}
//           </div>
          
//           {/* Línea de tendencia */}
//           <div className="absolute bottom-10 left-5 right-5 h-px bg-slate-300 dark:bg-slate-600 opacity-30"></div>
//         </div>
        
//         {/* Stats de la semana */}
//         <div className="grid grid-cols-3 gap-2 md:gap-3">
//           <div className="bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm rounded-lg p-2 md:p-3 text-center">
//             <div className="text-sm md:text-base font-bold text-slate-800 dark:text-white">
//               {visitors.reduce((a, b) => a + b, 0).toLocaleString()}K
//             </div>
//             <div className="text-[10px] md:text-xs text-slate-600 dark:text-slate-400">
//               Total
//             </div>
//           </div>
          
//           <div className="bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm rounded-lg p-2 md:p-3 text-center">
//             <div className="text-sm md:text-base font-bold text-slate-800 dark:text-white">
//               {Math.max(...visitors).toLocaleString()}K
//             </div>
//             <div className="text-[10px] md:text-xs text-slate-600 dark:text-slate-400">
//               Peak
//             </div>
//           </div>
          
//           <div className="bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm rounded-lg p-2 md:p-3 text-center">
//             <div className="text-sm md:text-base font-bold text-slate-800 dark:text-white">
//               {Math.round(visitors.reduce((a, b) => a + b, 0) / visitors.length).toLocaleString()}K
//             </div>
//             <div className="text-[10px] md:text-xs text-slate-600 dark:text-slate-400">
//               Avg/Day
//             </div>
//           </div>
//         </div>
        
//         {/* Comparación con semana pasada */}
//         <div className="mt-3 md:mt-4 pt-3 border-t border-slate-300/50 dark:border-slate-600/50">
//           <div className="flex items-center justify-between text-xs md:text-sm">
//             <span className="text-slate-600 dark:text-slate-400">
//               vs last week
//             </span>
//             <span className="font-semibold text-green-600 dark:text-green-400 flex items-center">
//               <span className="material-icons-outlined text-sm mr-1">trending_up</span>
//               +12.5%
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VisitorsChart;

import React from 'react';

const VisitorsChart: React.FC = () => {
  return (
    <div className="flex-1 bg-white dark:bg-slate-800 p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl dark:shadow-none dark:border dark:border-slate-700 relative overflow-hidden flex flex-col justify-between">
      <div className="absolute -bottom-8 -right-8 w-24 h-24 md:w-32 md:h-32 bg-indigo-100 dark:bg-indigo-900 rounded-full blur-2xl md:blur-3xl opacity-50"></div>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-white">
          Unique visitors
        </h3>
        <span className="text-xs font-semibold text-slate-400 flex items-center">
          Weekly <span className="material-icons-outlined text-sm">expand_more</span>
        </span>
      </div>
      <div className="relative w-full h-32 md:h-40">
        <div className="absolute left-0 top-0 bottom-3 md:bottom-4 flex flex-col justify-between text-[10px] md:text-xs text-slate-400">
          <span>50K</span>
          <span>25K</span>
        </div>
        <svg className="w-full h-full pl-5 md:pl-6 pb-3 md:pb-4 overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="gradientWave" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#4338ca" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#4338ca" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 C30,70 60,80 90,50 C120,20 150,70 180,75 C210,80 240,40 270,50 C290,55 300,70 300,70 L300,100 L0,100 Z"
            fill="url(#gradientWave)"
          />
          <path
            d="M0,50 C30,70 60,80 90,50 C120,20 150,70 180,75 C210,80 240,40 270,50 C290,55 300,70 300,70"
            fill="none"
            stroke="#4338ca"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
          <circle className="dark:stroke-slate-800" cx="0" cy="50" fill="#4338ca" r="2.5" stroke="white" strokeWidth="1.5" />
          <circle className="dark:stroke-slate-800" cx="90" cy="50" fill="#4338ca" r="2.5" stroke="white" strokeWidth="1.5" />
          <circle className="dark:stroke-slate-800" cx="180" cy="75" fill="#4338ca" r="2.5" stroke="white" strokeWidth="1.5" />
          <circle className="dark:stroke-slate-800" cx="270" cy="50" fill="#4338ca" r="2.5" stroke="white" strokeWidth="1.5" />
        </svg>
        <div className="absolute left-5 md:left-6 right-0 bottom-0 flex justify-between text-[8px] md:text-[10px] text-slate-400 uppercase tracking-wider">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
    </div>
  );
};

export default VisitorsChart;