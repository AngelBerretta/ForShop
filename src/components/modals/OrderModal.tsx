import React, { useState, useEffect } from 'react';
import { Order, OrderStatus } from '../../types';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (order: Partial<Order>) => void;
  order?: Order | null;
  isLoading?: boolean;
}

const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  order,
  isLoading = false,
}) => {
  const [formData, setFormData] = useState({
    customer: '',
    amount: '',
    status: 'pending' as OrderStatus,
    payment: 'Credit Card',
    items: '1',
  });

  useEffect(() => {
    if (order) {
      setFormData({
        customer: order.customer,
        amount: order.amount.replace('$', ''),
        status: order.status,
        payment: order.payment,
        items: order.items.toString(),
      });
    } else {
      setFormData({
        customer: '',
        amount: '',
        status: 'pending',
        payment: 'Credit Card',
        items: '1',
      });
    }
  }, [order, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      amount: `$${formData.amount}`,
      items: parseInt(formData.items, 10),
      date: order?.date || new Date().toISOString().split('T')[0],
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
                  {order ? 'Edit Order' : 'Create New Order'}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {order ? 'Update order details' : 'Add a new order to the system'}
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
                  Customer Name *
                </label>
                <input
                  type="text"
                  value={formData.customer}
                  onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
                  required
                  className="w-full px-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter customer name"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Amount ($) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400">
                      $
                    </span>
                    <input
                      type="number"
                      step="0.01"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      required
                      className="w-full pl-8 pr-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Items *
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={formData.items}
                    onChange={(e) => setFormData({ ...formData, items: e.target.value })}
                    required
                    className="w-full px-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Number of items"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Status *
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as OrderStatus })}
                    className="w-full px-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Payment Method *
                  </label>
                  <select
                    value={formData.payment}
                    onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="Credit Card">Credit Card</option>
                    <option value="PayPal">PayPal</option>
                    <option value="Apple Pay">Apple Pay</option>
                    <option value="Google Pay">Google Pay</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                  </select>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Order Summary
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Subtotal</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      ${formData.amount || '0.00'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Items</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {formData.items}
                    </span>
                  </div>
                  <div className="border-t border-slate-300 dark:border-slate-600 pt-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-slate-800 dark:text-slate-200">Total</span>
                      <span className="font-bold text-slate-800 dark:text-white">
                        ${formData.amount || '0.00'}
                      </span>
                    </div>
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
                  {order ? 'Updating...' : 'Creating...'}
                </>
              ) : (
                <>
                  <span className="material-icons-outlined text-sm">
                    {order ? 'save' : 'add'}
                  </span>
                  {order ? 'Update Order' : 'Create Order'}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;