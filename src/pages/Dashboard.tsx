import React from 'react';
import StatsCard from '../components/StatsCard';
import SalesChart from '../components/SalesChart';
import TopProducts from '../components/TopProducts';
import VisitorsChart from '../components/VisitorsChart';
import PageHeader from '../components/PageHeader';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Total Orders', value: '23.8K', change: '+20%' },
    { label: 'Total Revenue', value: '$12.9K', change: '+$840' },
    { label: 'Avg. Order', value: '$54.20', change: '+$2.40' },
    { label: 'Conversion', value: '4.2%', change: '+0.8%' }
  ];

  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Here is what's happening with your store today."
        stats={stats}
      />
      
      <div className="space-y-4 md:space-y-8">
        {/* Stats Cards Grid - Mejor responsive */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          <StatsCard
            title="Orders"
            value="23.8K"
            change="+20%"
            icon="receipt"
            iconBg="bg-white dark:bg-slate-700"
            iconColor="text-cyan-600 dark:text-cyan-400"
            gradientFrom="from-cyan-50"
            gradientTo="to-blue-50"
            compact // Nueva prop para diseño compacto
          />
          <StatsCard
            title="Profit"
            value="$12.9K"
            change="+$840"
            icon="account_balance_wallet"
            iconBg="bg-white dark:bg-slate-700"
            iconColor="text-rose-500"
            gradientFrom="from-pink-50"
            gradientTo="to-rose-50"
            compact
          />
          <StatsCard
            title="Avg. Order"
            value="$54.20"
            change="+$2.40"
            icon="shopping_cart"
            iconBg="bg-white dark:bg-slate-700"
            iconColor="text-emerald-500"
            gradientFrom="from-emerald-50"
            gradientTo="to-teal-50"
            compact
          />
          <StatsCard
            title="Conversion"
            value="4.2%"
            change="+0.8%"
            icon="trending_up"
            iconBg="bg-white dark:bg-slate-700"
            iconColor="text-violet-500"
            gradientFrom="from-violet-50"
            gradientTo="to-purple-50"
            compact
          />
        </div>

        {/* Main Content Grid - Mejor responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
          {/* Gráfico principal - Ocupa 2/3 en desktop, full en móvil */}
          <div className="lg:col-span-2">
            <SalesChart />
          </div>
          
          {/* Sidebar derecha - Ocupa 1/3 en desktop, full en móvil */}
          <div className="space-y-4 md:space-y-8">
            <TopProducts />
            <VisitorsChart />
          </div>
        </div>

        {/* Additional Metrics Grid - Solo en desktop/tablet */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-xl shadow-soft dark:shadow-none dark:border dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm md:text-base font-semibold text-slate-700 dark:text-slate-200">
                Customer Satisfaction
              </h3>
              <span className="text-xs font-semibold text-green-600 dark:text-green-400">92%</span>
            </div>
            <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '92%' }} />
            </div>
            <div className="flex justify-between mt-2 text-xs text-slate-500 dark:text-slate-400">
              <span>This month</span>
              <span className="text-green-600 dark:text-green-400">+5%</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-xl shadow-soft dark:shadow-none dark:border dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm md:text-base font-semibold text-slate-700 dark:text-slate-200">
                Return Rate
              </h3>
              <span className="text-xs font-semibold text-red-600 dark:text-red-400">3.2%</span>
            </div>
            <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-red-500 rounded-full" style={{ width: '3.2%' }} />
            </div>
            <div className="flex justify-between mt-2 text-xs text-slate-500 dark:text-slate-400">
              <span>This month</span>
              <span className="text-red-600 dark:text-red-400">-0.8%</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-xl shadow-soft dark:shadow-none dark:border dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm md:text-base font-semibold text-slate-700 dark:text-slate-200">
                Avg. Response Time
              </h3>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">2.4h</span>
            </div>
            <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: '60%' }} />
            </div>
            <div className="flex justify-between mt-2 text-xs text-slate-500 dark:text-slate-400">
              <span>This month</span>
              <span className="text-blue-600 dark:text-blue-400">-0.5h</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;