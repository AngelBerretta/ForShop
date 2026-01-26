import React, { useState } from 'react';
import { productsData } from '../data/mockData';
import { Product } from '../types';

interface ProductsTableProps {
  onEdit?: (product: Product) => void;
  onDelete?: (product: Product) => void;
}

const ProductsTable: React.FC<ProductsTableProps> = ({ onEdit, onDelete }) => {
  const [products] = useState<Product[]>(productsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in_stock': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'low_stock': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'out_of_stock': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'in_stock': return 'In Stock';
      case 'low_stock': return 'Low Stock';
      case 'out_of_stock': return 'Out of Stock';
      default: return 'Unknown';
    }
  };

  const getStockColor = (status: string) => {
    if (status === 'out_of_stock') return 'text-red-600 dark:text-red-400';
    if (status === 'low_stock') return 'text-yellow-600 dark:text-yellow-400';
    return 'text-green-600 dark:text-green-400';
  };

  const handleViewProduct = (product: Product) => {
    alert(`Viewing product: ${product.name}\nCategory: ${product.category}\nPrice: ${product.price}\nStock: ${product.stock} units\nStatus: ${getStatusText(product.status)}`);
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
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-10 pr-4 py-2 w-full bg-slate-50 dark:bg-slate-700 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary dark:text-white"
            />
          </div>
          <div className="flex items-center gap-3">
            <select
              value={categoryFilter}
              onChange={(e) => {
                setCategoryFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-slate-50 dark:bg-slate-700 border-none rounded-lg text-sm py-2 px-3 focus:ring-2 focus:ring-primary dark:text-white"
            >
              <option value="all">All Categories</option>
              <option value="Clothing">Clothing</option>
              <option value="Accessories">Accessories</option>
              <option value="Sportswear">Sportswear</option>
              <option value="Footwear">Footwear</option>
              <option value="Electronics">Electronics</option>
            </select>
            {onEdit && (
              <button 
                onClick={() => onEdit({} as Product)} // Pasar un objeto vacío para crear nuevo
                className="bg-primary hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm flex items-center gap-2"
              >
                <span className="material-icons-outlined text-sm">add</span>
                Add Product
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 dark:bg-slate-700/50">
            <tr>
              <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Product</th>
              <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Category</th>
              <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Price</th>
              <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Stock</th>
              <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Sales</th>
              <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Status</th>
              <th className="text-left py-3 px-4 md:px-6 text-sm font-semibold text-slate-600 dark:text-slate-300">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {paginatedProducts.map((product) => (
              <tr key={product.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <td className="py-3 px-4 md:px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden bg-gray-100 dark:bg-slate-700 flex-shrink-0">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-800 dark:text-white">{product.name}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{product.id}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 md:px-6 text-sm text-slate-600 dark:text-slate-300">
                  {product.category}
                </td>
                <td className="py-3 px-4 md:px-6">
                  <div className="text-sm font-bold text-slate-800 dark:text-white">{product.price}</div>
                </td>
                <td className="py-3 px-4 md:px-6">
                  <div className={`text-sm font-medium ${getStockColor(product.status)}`}>
                    {product.stock} units
                  </div>
                </td>
                <td className="py-3 px-4 md:px-6">
                  <div className="text-sm text-slate-600 dark:text-slate-300">{product.sales}</div>
                </td>
                <td className="py-3 px-4 md:px-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                    {getStatusText(product.status)}
                  </span>
                </td>
                <td className="py-3 px-4 md:px-6">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handleViewProduct(product)}
                      className="p-1 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
                      title="View Product"
                    >
                      <span className="material-icons-outlined text-lg">visibility</span>
                    </button>
                    {onEdit && (
                      <button 
                        onClick={() => onEdit(product)}
                        className="p-1 text-slate-500 hover:text-green-600 dark:text-slate-400 dark:hover:text-green-400 transition-colors"
                        title="Edit Product"
                      >
                        <span className="material-icons-outlined text-lg">edit</span>
                      </button>
                    )}
                    {onDelete && (
                      <button 
                        onClick={() => onDelete(product)}
                        className="p-1 text-slate-500 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 transition-colors"
                        title="Delete Product"
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
      {paginatedProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-4">
            <span className="material-icons-outlined text-slate-400 dark:text-slate-500">
              inventory_2
            </span>
          </div>
          <h3 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">
            No products found
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            {searchTerm || categoryFilter !== 'all' 
              ? 'Try adjusting your search or filter to find what you\'re looking for.'
              : 'There are no products in your catalog yet. Add your first product!'}
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="p-4 md:p-6 border-t border-slate-200 dark:border-slate-700">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-sm text-slate-500 dark:text-slate-400">
              Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredProducts.length)} of {filteredProducts.length} products
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

export default ProductsTable;