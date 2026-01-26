import React, { useState } from 'react';
import { Report } from '../../types';

type ReportFormData = {
  name: string;
  type: string;
  period: string;
  format: 'PDF' | 'Excel' | 'CSV' | 'HTML';
  includeCharts: boolean;
  includeData: boolean;
};

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerate: (reportData: Partial<Report>) => void;
  isLoading?: boolean;
}


const ReportModal: React.FC<ReportModalProps> = ({
  isOpen,
  onClose,
  onGenerate,
  isLoading = false,
}) => {
  const [formData, setFormData] = useState<ReportFormData>({
    name: '',
    type: 'Sales',
    period: 'monthly',
    format: 'PDF',
    includeCharts: true,
    includeData: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate({
      name: formData.name || `${formData.type} Report - ${new Date().toLocaleDateString()}`,
      type: formData.type,
      period: formData.period === 'custom' ? 'Custom Range' : 
              formData.period === 'monthly' ? `${new Date().toLocaleString('default', { month: 'long' })} ${new Date().getFullYear()}` :
              formData.period === 'quarterly' ? `Q${Math.floor(new Date().getMonth() / 3) + 1} ${new Date().getFullYear()}` :
              `Year ${new Date().getFullYear()}`,
      format: formData.format,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        />

        <div className="inline-block align-bottom bg-white dark:bg-slate-800 rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="px-6 pt-6 pb-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                  Generate Report
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Configure and generate a new business report
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400"
              >
                <span className="material-icons-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Report Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., Monthly Sales Analysis"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Report Type *
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="Sales">Sales Report</option>
                    <option value="Inventory">Inventory Report</option>
                    <option value="Customer">Customer Analytics</option>
                    <option value="Marketing">Marketing Performance</option>
                    <option value="Financial">Financial Summary</option>
                    <option value="Product">Product Performance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Period *
                  </label>
                  <select
                    value={formData.period}
                    onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="yearly">Yearly</option>
                    <option value="custom">Custom Range</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Format *
                  </label>
                  <select
                    value={formData.format}
                    onChange={(e) => setFormData({ ...formData, format: e.target.value as ReportFormData['format'], })}
                    className="w-full px-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="PDF">PDF Document</option>
                    <option value="Excel">Excel Spreadsheet</option>
                    <option value="CSV">CSV Data</option>
                    <option value="HTML">HTML Web Page</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Size Estimate
                    </label>
                    <div className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {formData.format === 'PDF' ? '2-4 MB' :
                       formData.format === 'Excel' ? '1-3 MB' :
                       formData.format === 'CSV' ? '0.5-2 MB' : '3-6 MB'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Include
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.includeCharts}
                      onChange={(e) => setFormData({ ...formData, includeCharts: e.target.checked })}
                      className="w-4 h-4 text-primary bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 rounded focus:ring-primary"
                    />
                    <div>
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        Charts & Graphs
                      </span>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Visual representation of data
                      </p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.includeData}
                      onChange={(e) => setFormData({ ...formData, includeData: e.target.checked })}
                      className="w-4 h-4 text-primary bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 rounded focus:ring-primary"
                    />
                    <div>
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        Raw Data Tables
                      </span>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Detailed data tables and statistics
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                  Report Preview
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Type</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {formData.type} Report
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Format</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {formData.format}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Generated</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {new Date().toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/50 flex justify-end gap-3">
            <button
              onClick={onClose}
              disabled={isLoading}
              className="px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="px-4 py-2.5 text-sm font-medium text-white bg-primary hover:bg-indigo-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Generating...
                </>
              ) : (
                <>
                  <span className="material-icons-outlined text-sm">download</span>
                  Generate Report
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;