import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import ProductsTable from '../components/ProductsTable';
import ProductModal from '../components/modals/ProductModal';
import DeleteDialog from '../components/dialogs/DeleteDialog';
import { Product } from '../types';
import { productStats } from '../data/mockData';

const Products: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateProduct = () => {
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleDeleteProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsDeleteDialogOpen(true);
  };

  const handleSubmitProduct = async (productData: Partial<Product>) => {
    setIsLoading(true);
     console.log('Product data submitted:', productData);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (selectedProduct) {
      alert(`Product ${selectedProduct.name} updated successfully!`);
    } else {
      alert('New product created successfully!');
    }
    
    setIsLoading(false);
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleConfirmDelete = async () => {
    if (!selectedProduct) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert(`Product ${selectedProduct.name} deleted successfully!`);
    
    setIsLoading(false);
    setIsDeleteDialogOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <PageHeader
        title="Products"
        description="Manage your product catalog"
        actionButton={{
          label: 'Add Product',
          onClick: handleCreateProduct,
          icon: 'add'
        }}
        stats={productStats}
      />
      
      <ProductsTable 
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
      />

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }}
        onSubmit={handleSubmitProduct}
        product={selectedProduct}
        isLoading={isLoading}
      />

      <DeleteDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => {
          setIsDeleteDialogOpen(false);
          setSelectedProduct(null);
        }}
        onConfirm={handleConfirmDelete}
        title="Delete Product"
        description="Are you sure you want to delete this product? All associated data will be lost."
        itemName={selectedProduct?.name}
        isLoading={isLoading}
      />
    </>
  );
};

export default Products;