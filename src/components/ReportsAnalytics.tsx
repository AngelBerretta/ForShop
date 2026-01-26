import React, { useState } from 'react';
import { reportsData } from '../data/mockData';
import { Report } from '../types';

interface ReportsAnalyticsProps {
  onDelete?: (report: Report) => void;
}

const ReportsAnalytics: React.FC<ReportsAnalyticsProps> = ({ onDelete }) => {
  const [reports] = useState<Report[]>(reportsData);
  const [selectedReport, setSelectedReport] = useState<string | null>(null);
  const [reportType, setReportType] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredReports = reportType === 'all' 
    ? reports 
    : reports.filter(report => report.type === reportType);

  // Pagination
  const totalPages = Math.ceil(filteredReports.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedReports = filteredReports.slice(startIndex, startIndex + itemsPerPage);

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'sales':
        return 'trending_up';
      case 'analytics':
        return 'analytics';
      case 'inventory':
        return 'inventory_2';
      case 'marketing':
        return 'campaign';
      case 'financial':
        return 'attach_money';
      default:
        return 'description';
    }
  };

  const downloadReport = (reportId: string) => {
    setSelectedReport(reportId);
    alert(`Downloading report ${reportId}...`);
    setTimeout(() => setSelectedReport(null), 2000);
  };

  const handleViewReport = (report: Report) => {
    alert(`Viewing report: ${report.name}\nType: ${report.type}\nPeriod: ${report.period}\nGenerated: ${new Date(report.generated).toLocaleDateString()}\nDownloads: ${report.downloads}\nSize: ${report.size}`);
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
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-800 dark:border dark:border-slate-700 p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Total Reports</p>
              <p className="text-2xl font-bold text-slate-800 dark:text-white mt-1">24</p>
            </div>
            <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
              <span className="material-icons-outlined text-xl">description</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600 dark:text-slate-300">This month</span>
              <span className="text-green-600 dark:text-green-400 font-semibold">+12%</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-800 dark:border dark:border-slate-700 p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Total Downloads</p>
              <p className="text-2xl font-bold text-slate-800 dark:text-white mt-1">1,234</p>
            </div>
            <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400">
              <span className="material-icons-outlined text-xl">download</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600 dark:text-slate-300">This month</span>
              <span className="text-green-600 dark:text-green-400 font-semibold">+24%</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-800 dark:border dark:border-slate-700 p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Avg. Report Size</p>
              <p className="text-2xl font-bold text-slate-800 dark:text-white mt-1">3.4 MB</p>
            </div>
            <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400">
              <span className="material-icons-outlined text-xl">storage</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600 dark:text-slate-300">This month</span>
              <span className="text-green-600 dark:text-green-400 font-semibold">-8%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reports Section */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:border dark:border-slate-700 overflow-hidden">
        <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-700">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">Reports</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">View and manage generated reports</p>
            </div>
            <div className="flex items-center gap-3">
              <select
                value={reportType}
                onChange={(e) => {
                  setReportType(e.target.value);
                  setCurrentPage(1);
                }}
                className="bg-slate-50 dark:bg-slate-700 border-none rounded-lg text-sm py-2 px-3 focus:ring-2 focus:ring-primary dark:text-white"
              >
                <option value="all">All Types</option>
                <option value="Sales">Sales</option>
                <option value="Analytics">Analytics</option>
                <option value="Inventory">Inventory</option>
                <option value="Marketing">Marketing</option>
                <option value="Financial">Financial</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-700/50">
              <tr>
                <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Report</th>
                <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Type</th>
                <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Period</th>
                <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Generated</th>
                <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Downloads</th>
                <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {paginatedReports.map((report) => (
                <tr key={report.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="py-3 px-4 md:px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-primary">
                        <span className="material-icons-outlined">
                          {getTypeIcon(report.type)}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-800 dark:text-white">{report.name}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">{report.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 md:px-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                      {report.type}
                    </span>
                  </td>
                  <td className="py-3 px-4 md:px-6 text-sm text-slate-600 dark:text-slate-300">
                    {report.period}
                  </td>
                  <td className="py-3 px-4 md:px-6 text-sm text-slate-600 dark:text-slate-300">
                    {formatDate(report.generated)}
                  </td>
                  <td className="py-3 px-4 md:px-6">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-slate-800 dark:text-white">
                        {report.downloads}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        ({report.size})
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 md:px-6">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => downloadReport(report.id)}
                        disabled={selectedReport === report.id}
                        className={`p-1 rounded transition-colors ${
                          selectedReport === report.id
                            ? 'text-green-600 dark:text-green-400'
                            : 'text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary'
                        }`}
                        title="Download Report"
                      >
                        <span className="material-icons-outlined text-lg">
                          {selectedReport === report.id ? 'check' : 'download'}
                        </span>
                      </button>
                      <button 
                        onClick={() => handleViewReport(report)}
                        className="p-1 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
                        title="View Report"
                      >
                        <span className="material-icons-outlined text-lg">visibility</span>
                      </button>
                      {onDelete && (
                        <button 
                          onClick={() => onDelete(report)}
                          className="p-1 text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 transition-colors"
                          title="Delete Report"
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
        {paginatedReports.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-4">
              <span className="material-icons-outlined text-slate-400 dark:text-slate-500">
                description
              </span>
            </div>
            <h3 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">
              No reports found
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
              {reportType !== 'all' 
                ? `No ${reportType.toLowerCase()} reports found. Try a different filter.`
                : 'There are no reports yet. Generate your first report!'}
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="p-4 md:p-6 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredReports.length)} of {filteredReports.length} reports
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

export default ReportsAnalytics;