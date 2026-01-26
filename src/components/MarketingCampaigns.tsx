// import React, { useState } from 'react';
// import { campaignsData, marketingStats } from '../data/mockData';

// interface Campaign {
//   id: string;
//   name: string;
//   channel: string;
//   budget: string;
//   spent: string;
//   status: 'active' | 'paused' | 'completed' | 'draft';
//   startDate: string;
//   endDate: string;
//   conversion: string;
// }

// const MarketingCampaigns: React.FC = () => {
//   const [campaigns] = useState<Campaign[]>(campaignsData);
//   const [activeTab, setActiveTab] = useState<'all' | 'active' | 'completed'>('all');

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
//       case 'paused': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
//       case 'completed': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
//       case 'draft': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
//       default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
//     }
//   };

//   const getChannelIcon = (channel: string) => {
//     switch (channel.toLowerCase()) {
//       case 'email':
//         return 'mail';
//       case 'social media':
//         return 'share';
//       case 'influencer':
//         return 'person';
//       case 'email & social':
//         return 'forum';
//       case 'ppc & social':
//         return 'trending_up';
//       default:
//         return 'campaign';
//     }
//   };

//   const filteredCampaigns = campaigns.filter(campaign => {
//     if (activeTab === 'all') return true;
//     if (activeTab === 'active') return campaign.status === 'active';
//     if (activeTab === 'completed') return campaign.status === 'completed';
//     return true;
//   });

//   return (
//     <div className="space-y-6">
//       {/* Stats Cards */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {marketingStats.map((stat, index) => (
//           <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm dark:border dark:border-slate-700">
//             <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
//             <div className="flex items-end justify-between mt-2">
//               <p className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
//                 {stat.value}
//               </p>
//               <span className={`text-xs font-semibold px-2 py-1 rounded-lg ${
//                 stat.change.startsWith('+') 
//                   ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
//                   : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
//               }`}>
//                 {stat.change}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Campaigns Section */}
//       <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:border dark:border-slate-700 overflow-hidden">
//         <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-700">
//           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//             <div>
//               <h3 className="text-lg font-bold text-slate-800 dark:text-white">Campaigns</h3>
//               <p className="text-sm text-slate-500 dark:text-slate-400">Manage your marketing campaigns</p>
//             </div>
//             <div className="flex items-center gap-3">
//               <div className="flex bg-slate-100 dark:bg-slate-700 rounded-lg p-1">
//                 {(['all', 'active', 'completed'] as const).map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`px-3 py-1 text-sm rounded-md transition-colors ${
//                       activeTab === tab
//                         ? 'bg-white dark:bg-slate-800 text-primary dark:text-white shadow-sm'
//                         : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
//                     }`}
//                   >
//                     {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                   </button>
//                 ))}
//               </div>
//               <button className="bg-primary hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm">
//                 Create Campaign
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-slate-50 dark:bg-slate-700/50">
//               <tr>
//                 <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Campaign</th>
//                 <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Channel</th>
//                 <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Budget</th>
//                 <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Spent</th>
//                 <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Status</th>
//                 <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Conversion</th>
//                 <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
//               {filteredCampaigns.map((campaign) => (
//                 <tr key={campaign.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
//                   <td className="py-3 px-4 md:px-6">
//                     <div className="text-sm font-medium text-slate-800 dark:text-white">{campaign.name}</div>
//                     <div className="text-xs text-slate-500 dark:text-slate-400">
//                       {new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}
//                     </div>
//                   </td>
//                   <td className="py-3 px-4 md:px-6">
//                     <div className="flex items-center gap-2">
//                       <span className="material-icons-outlined text-primary text-lg">
//                         {getChannelIcon(campaign.channel)}
//                       </span>
//                       <span className="text-sm text-slate-600 dark:text-slate-300">{campaign.channel}</span>
//                     </div>
//                   </td>
//                   <td className="py-3 px-4 md:px-6">
//                     <div className="text-sm font-bold text-slate-800 dark:text-white">{campaign.budget}</div>
//                   </td>
//                   <td className="py-3 px-4 md:px-6">
//                     <div className="text-sm text-slate-600 dark:text-slate-300">{campaign.spent}</div>
//                   </td>
//                   <td className="py-3 px-4 md:px-6">
//                     <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
//                       {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
//                     </span>
//                   </td>
//                   <td className="py-3 px-4 md:px-6">
//                     <div className="text-sm font-bold text-slate-800 dark:text-white">{campaign.conversion}</div>
//                   </td>
//                   <td className="py-3 px-4 md:px-6">
//                     <div className="flex items-center gap-2">
//                       <button className="p-1 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors">
//                         <span className="material-icons-outlined text-lg">play_arrow</span>
//                       </button>
//                       <button className="p-1 text-slate-500 hover:text-green-600 dark:text-slate-400 dark:hover:text-green-400 transition-colors">
//                         <span className="material-icons-outlined text-lg">edit</span>
//                       </button>
//                       <button className="p-1 text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 transition-colors">
//                         <span className="material-icons-outlined text-lg">delete</span>
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MarketingCampaigns;

import React, { useState } from 'react';
import { campaignsData, marketingStats } from '../data/mockData';
import { Campaign } from '../types';

interface MarketingCampaignsProps {
  onEdit?: (campaign: Campaign) => void;
  onDelete?: (campaign: Campaign) => void;
}

const MarketingCampaigns: React.FC<MarketingCampaignsProps> = ({ onEdit, onDelete }) => {
  const [campaigns] = useState<Campaign[]>(campaignsData);
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'completed'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredCampaigns = campaigns.filter(campaign => {
    if (activeTab === 'all') return true;
    if (activeTab === 'active') return campaign.status === 'active';
    if (activeTab === 'completed') return campaign.status === 'completed';
    return true;
  });

  // Pagination
  const totalPages = Math.ceil(filteredCampaigns.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCampaigns = filteredCampaigns.slice(startIndex, startIndex + itemsPerPage);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'paused': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'completed': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'draft': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getChannelIcon = (channel: string) => {
    switch (channel.toLowerCase()) {
      case 'email':
        return 'mail';
      case 'social media':
        return 'share';
      case 'influencer':
        return 'person';
      case 'email & social':
        return 'forum';
      case 'ppc & social':
        return 'trending_up';
      default:
        return 'campaign';
    }
  };

  const handleViewCampaign = (campaign: Campaign) => {
    alert(`Viewing campaign: ${campaign.name}\nChannel: ${campaign.channel}\nBudget: ${campaign.budget}\nStatus: ${campaign.status}\nConversion: ${campaign.conversion}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {marketingStats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm dark:border dark:border-slate-700">
            <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
            <div className="flex items-end justify-between mt-2">
              <p className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
                {stat.value}
              </p>
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

      {/* Campaigns Section */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:border dark:border-slate-700 overflow-hidden">
        <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-700">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">Campaigns</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Manage your marketing campaigns</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex bg-slate-100 dark:bg-slate-700 rounded-lg p-1">
                {(['all', 'active', 'completed'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setCurrentPage(1);
                    }}
                    className={`px-3 py-1 text-sm rounded-md transition-colors ${
                      activeTab === tab
                        ? 'bg-white dark:bg-slate-800 text-primary dark:text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              {onEdit && (
                <button 
                  onClick={() => onEdit({} as Campaign)}
                  className="bg-primary hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm flex items-center gap-2"
                >
                  <span className="material-icons-outlined text-sm">add</span>
                  Create Campaign
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Campaign</th>
                <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Channel</th>
                <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Budget</th>
                <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Spent</th>
                <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Status</th>
                <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Conversion</th>
                <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {paginatedCampaigns.map((campaign) => (
                <tr key={campaign.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="py-3 px-4 md:px-6">
                    <div className="text-sm font-medium text-slate-800 dark:text-white">{campaign.name}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {formatDate(campaign.startDate)} - {formatDate(campaign.endDate)}
                    </div>
                  </td>
                  <td className="py-3 px-4 md:px-6">
                    <div className="flex items-center gap-2">
                      <span className="material-icons-outlined text-primary text-lg">
                        {getChannelIcon(campaign.channel)}
                      </span>
                      <span className="text-sm text-slate-600 dark:text-slate-300">{campaign.channel}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 md:px-6">
                    <div className="text-sm font-bold text-slate-800 dark:text-white">{campaign.budget}</div>
                  </td>
                  <td className="py-3 px-4 md:px-6">
                    <div className="text-sm text-slate-600 dark:text-slate-300">{campaign.spent}</div>
                  </td>
                  <td className="py-3 px-4 md:px-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                      {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-3 px-4 md:px-6">
                    <div className="text-sm font-bold text-slate-800 dark:text-white">{campaign.conversion}</div>
                  </td>
                  <td className="py-3 px-4 md:px-6">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleViewCampaign(campaign)}
                        className="p-1 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
                        title="View Campaign"
                      >
                        <span className="material-icons-outlined text-lg">visibility</span>
                      </button>
                      {onEdit && (
                        <button 
                          onClick={() => onEdit(campaign)}
                          className="p-1 text-slate-500 hover:text-green-600 dark:text-slate-400 dark:hover:text-green-400 transition-colors"
                          title="Edit Campaign"
                        >
                          <span className="material-icons-outlined text-lg">edit</span>
                        </button>
                      )}
                      {onDelete && (
                        <button 
                          onClick={() => onDelete(campaign)}
                          className="p-1 text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 transition-colors"
                          title="Delete Campaign"
                        >
                          <span className="material-icons-outlined text-lg">delete</span>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {paginatedCampaigns.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-4">
              <span className="material-icons-outlined text-slate-400 dark:text-slate-500">
                campaign
              </span>
            </div>
            <h3 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">
              No campaigns found
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
              {activeTab !== 'all' 
                ? `No ${activeTab} campaigns found. Try a different filter.`
                : 'There are no campaigns yet. Create your first campaign!'}
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="p-4 md:p-6 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredCampaigns.length)} of {filteredCampaigns.length} campaigns
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Previous Page"
                >
                  <span className="material-icons-outlined">chevron_left</span>
                </button>
                
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`p-2 w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                        currentPage === pageNum
                          ? 'bg-primary text-white'
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Next Page"
                >
                  <span className="material-icons-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketingCampaigns;