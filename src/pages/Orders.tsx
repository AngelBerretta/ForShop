import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import OrdersTable from '../components/OrdersTable';
import OrderModal from '../components/modals/OrderModal';
import DeleteDialog from '../components/dialogs/DeleteDialog';
import { Order } from '../types';

const Orders: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const stats = [
    { label: 'Total Orders', value: '23,789', change: '+20%' },
    { label: 'Pending', value: '1,234', change: '-5%' },
    { label: 'Processing', value: '456', change: '+12%' },
    { label: 'Completed', value: '22,099', change: '+15%' }
  ];

  const handleCreateOrder = () => {
    setSelectedOrder(null);
    setIsModalOpen(true);
  };

  const handleEditOrder = (order: Order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleDeleteOrder = (order: Order) => {
    setSelectedOrder(order);
    setIsDeleteDialogOpen(true);
  };

  const handleSubmitOrder = async (orderData: Partial<Order>) => {
    setIsLoading(true);
     console.log('Order data submitted:', orderData);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (selectedOrder) {
      // Update existing order
      alert(`Order ${selectedOrder.id} updated successfully!`);
    } else {
      // Create new order
      alert('New order created successfully!');
    }
    
    setIsLoading(false);
    setIsModalOpen(false);
  };

  const handleConfirmDelete = async () => {
    if (!selectedOrder) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert(`Order ${selectedOrder.id} deleted successfully!`);
    
    setIsLoading(false);
    setIsDeleteDialogOpen(false);
    setSelectedOrder(null);
  };

  return (
    <>
      <PageHeader
        title="Orders"
        description="Manage and track customer orders"
        actionButton={{
          label: 'New Order',
          onClick: handleCreateOrder,
          icon: 'add'
        }}
        stats={stats}
      />
      
      <OrdersTable 
        onEdit={handleEditOrder}
        onDelete={handleDeleteOrder}
      />

      {/* Modals */}
      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitOrder}
        order={selectedOrder}
        isLoading={isLoading}
      />

      <DeleteDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Delete Order"
        description="Are you sure you want to delete this order? This action cannot be undone."
        itemName={selectedOrder ? `Order ${selectedOrder.id} - ${selectedOrder.customer}` : undefined}
        isLoading={isLoading}
      />
    </>
  );
};

export default Orders;