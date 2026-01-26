import React, { useState, useEffect } from 'react';
import { Campaign, CampaignStatus } from '../../types';

interface CampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (campaign: Partial<Campaign>) => void;
  campaign?: Campaign | null;
  isLoading?: boolean;
}

const CampaignModal: React.FC<CampaignModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  campaign,
  isLoading = false,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    channel: 'Email',
    budget: '',
    status: 'active' as CampaignStatus,
    startDate: '',
    endDate: '',
    conversion: '0',
  });

  useEffect(() => {
    if (campaign) {
      setFormData({
        name: campaign.name,
        channel: campaign.channel,
        budget: campaign.budget.replace('$', ''),
        status: campaign.status,
        startDate: campaign.startDate,
        endDate: campaign.endDate,
        conversion: campaign.conversion.replace('%', ''),
      });
    } else {
      const today = new Date().toISOString().split('T')[0];
      const nextMonth = new Date();
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      const nextMonthStr = nextMonth.toISOString().split('T')[0];

      setFormData({
        name: '',
        channel: 'Email',
        budget: '',
        status: 'active',
        startDate: today,
        endDate: nextMonthStr,
        conversion: '0',
      });
    }
  }, [campaign, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      budget: `$${formData.budget}`,
      conversion: `${formData.conversion}%`,
      spent: campaign?.spent || '$0',
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
                  {campaign ? 'Edit Campaign' : 'Create Campaign'}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {campaign ? 'Update campaign details' : 'Launch a new marketing campaign'}
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
                  Campaign Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter campaign name"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Channel *
                  </label>
                  <select
                    value={formData.channel}
                    onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="Email">Email</option>
                    <option value="Social Media">Social Media</option>
                    <option value="PPC">PPC</option>
                    <option value="Influencer">Influencer</option>
                    <option value="Affiliate">Affiliate</option>
                    <option value="SMS">SMS</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Budget ($) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400">
                      $
                    </span>
                    <input
                      type="number"
                      min="0"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      required
                      className="w-full pl-8 pr-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Start Date *
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    required
                    className="w-full px-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    End Date *
                  </label>
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    required
                    min={formData.startDate}
                    className="w-full px-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Target Conversion (%) *
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      step="0.1"
                      value={formData.conversion}
                      onChange={(e) => setFormData({ ...formData, conversion: e.target.value })}
                      required
                      className="w-full px-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="0.0"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400">
                      %
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Status *
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as CampaignStatus })}
                    className="w-full px-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="active">Active</option>
                    <option value="paused">Paused</option>
                    <option value="draft">Draft</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                  Campaign Preview
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Duration</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {formData.startDate && formData.endDate ? (
                        `${Math.ceil((new Date(formData.endDate).getTime() - new Date(formData.startDate).getTime()) / (1000 * 3600 * 24))} days`
                      ) : '0 days'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Daily Budget</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      ${formData.budget && formData.startDate && formData.endDate ? (
                        (parseFloat(formData.budget) / Math.max(
                          Math.ceil((new Date(formData.endDate).getTime() - new Date(formData.startDate).getTime()) / (1000 * 3600 * 24)),
                          1
                        )).toFixed(2)
                      ) : '0.00'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Expected ROI</span>
                    <span className="font-medium text-green-600 dark:text-green-400">
                      {formData.budget && formData.conversion ? (
                        `${(parseFloat(formData.conversion) * 10).toFixed(1)}x`
                      ) : '0.0x'}
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
                  {campaign ? 'Updating...' : 'Creating...'}
                </>
              ) : (
                <>
                  <span className="material-icons-outlined text-sm">
                    {campaign ? 'save' : 'campaign'}
                  </span>
                  {campaign ? 'Update Campaign' : 'Launch Campaign'}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignModal;