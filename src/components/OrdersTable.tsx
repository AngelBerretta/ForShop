import React, { useState } from 'react';
import { ordersData } from '../data/mockData';
import { Order } from '../types';

interface OrdersTableProps {
  onEdit?: (order: Order) => void;
  onDelete?: (order: Order) => void;
}

const OrdersTable: React.FC<OrdersTableProps> = ({ onEdit, onDelete }) => {
  const [orders] = useState<Order[]>(ordersData);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = filteredOrders.slice(startIndex, startIndex + itemsPerPage);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'processing': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'shipped': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'cancelled': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const handleViewOrder = (order: Order) => {
    alert(`Viewing order: ${order.id}\nCustomer: ${order.customer}\nAmount: ${order.amount}\nStatus: ${order.status}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm dark:border dark:border-slate-700 overflow-hidden">
      <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-700">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400">
              search
            </span>
            <input
              type="text"
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Reset to first page on search
              }}
              className="pl-10 pr-4 py-2 w-full bg-slate-50 dark:bg-slate-700 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary dark:text-white"
            />
          </div>
          <div className="flex items-center gap-3">
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1); // Reset to first page on filter change
              }}
              className="bg-slate-50 dark:bg-slate-700 border-none rounded-lg text-sm py-2 px-3 focus:ring-2 focus:ring-primary dark:text-white"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <button className="bg-primary hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm">
              Export CSV
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 dark:bg-slate-700/50">
            <tr>
              <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Order ID</th>
              <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Customer</th>
              <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Date</th>
              <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Amount</th>
              <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Status</th>
              <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {paginatedOrders.map((order) => (
              <tr key={order.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <td className="py-3 px-4 md:px-6">
                  <div className="text-sm font-medium text-slate-800 dark:text-white">{order.id}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{order.items} items</div>
                </td>
                <td className="py-3 px-4 md:px-6">
                  <div className="text-sm font-medium text-slate-800 dark:text-white">{order.customer}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{order.payment}</div>
                </td>
                <td className="py-3 px-4 md:px-6 text-sm text-slate-600 dark:text-slate-300">
                  {new Date(order.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </td>
                <td className="py-3 px-4 md:px-6">
                  <div className="text-sm font-bold text-slate-800 dark:text-white">{order.amount}</div>
                </td>
                <td className="py-3 px-4 md:px-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </td>
                <td className="py-3 px-4 md:px-6">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handleViewOrder(order)}
                      className="p-1 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
                      title="View Order"
                    >
                      <span className="material-icons-outlined text-lg">visibility</span>
                    </button>
                    {onEdit && (
                      <button 
                        onClick={() => onEdit(order)}
                        className="p-1 text-slate-500 hover:text-green-600 dark:text-slate-400 dark:hover:text-green-400 transition-colors"
                        title="Edit Order"
                      >
                        <span className="material-icons-outlined text-lg">edit</span>
                      </button>
                    )}
                    {onDelete && (
                      <button 
                        onClick={() => onDelete(order)}
                        className="p-1 text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 transition-colors"
                        title="Delete Order"
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
      {paginatedOrders.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-4">
            <span className="material-icons-outlined text-slate-400 dark:text-slate-500">
              receipt
            </span>
          </div>
          <h3 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">
            No orders found
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            {searchTerm || statusFilter !== 'all' 
              ? 'Try adjusting your search or filter to find what you\'re looking for.'
              : 'There are no orders in the system yet. Create your first order!'}
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="p-4 md:p-6 border-t border-slate-200 dark:border-slate-700">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-sm text-slate-500 dark:text-slate-400">
              Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredOrders.length)} of {filteredOrders.length} orders
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
  );
};

export default OrdersTable;