import React, { useState, useEffect } from 'react';
import { Product, ProductStatus } from '../../types';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (product: Partial<Product>) => void;
  product?: Product | null;
  isLoading?: boolean;
}

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  product,
  isLoading = false,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Clothing',
    price: '',
    stock: '0',
    status: 'in_stock' as ProductStatus,
    image: '',
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        category: product.category,
        price: product.price.replace('$', ''),
        stock: product.stock.toString(),
        status: product.status,
        image: product.image,
      });
    } else {
      setFormData({
        name: '',
        category: 'Clothing',
        price: '',
        stock: '0',
        status: 'in_stock',
        image: '',
      });
    }
  }, [product, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      price: `$${formData.price}`,
      stock: parseInt(formData.stock, 10),
      sales: product?.sales || 0,
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
                  {product ? 'Edit Product' : 'Add New Product'}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {product ? 'Update product details' : 'Add a new product to your catalog'}
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
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 dark:bg-slate-700 flex items-center justify-center">
                  {formData.image ? (
                    <img
                      src={formData.image}
                      alt="Product preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="material-icons-outlined text-slate-400">
                      image
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Image URL
                  </label>
                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full px-4 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Product Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter product name"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="Clothing">Clothing</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Footwear">Footwear</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Sportswear">Sportswear</option>
                    <option value="Home & Garden">Home & Garden</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Price ($) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400">
                      $
                    </span>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      required
                      className="w-full pl-8 pr-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Stock Quantity *
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                    required
                    className="w-full px-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Status *
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as ProductStatus })}
                    className="w-full px-4 py-2.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="in_stock">In Stock</option>
                    <option value="low_stock">Low Stock</option>
                    <option value="out_of_stock">Out of Stock</option>
                  </select>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Stock Status
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Current Stock</span>
                    <span className={`font-medium ${
                      parseInt(formData.stock) > 50 ? 'text-green-600 dark:text-green-400' :
                      parseInt(formData.stock) > 10 ? 'text-yellow-600 dark:text-yellow-400' :
                      'text-red-600 dark:text-red-400'
                    }`}>
                      {formData.stock} units
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        parseInt(formData.stock) > 50 ? 'bg-green-500' :
                        parseInt(formData.stock) > 10 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ 
                        width: `${Math.min(parseInt(formData.stock) * 2, 100)}%` 
                      }}
                    />
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {parseInt(formData.stock) > 50 ? 'Good stock level' :
                     parseInt(formData.stock) > 10 ? 'Moderate stock level' :
                     'Low stock - consider restocking'}
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
                  {product ? 'Updating...' : 'Creating...'}
                </>
              ) : (
                <>
                  <span className="material-icons-outlined text-sm">
                    {product ? 'save' : 'add'}
                  </span>
                  {product ? 'Update Product' : 'Add Product'}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;