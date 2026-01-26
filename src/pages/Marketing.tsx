// import React, { useState } from 'react';
// import PageHeader from '../components/PageHeader';
// import MarketingCampaigns from '../components/MarketingCampaigns';
// import CampaignModal from '../components/modals/CampaignModal';
// import DeleteDialog from '../components/dialogs/DeleteDialog';
// import { Campaign } from '../types';

// const Marketing: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
//   const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const stats = [
//     { label: 'Total Campaigns', value: '15', change: '+3' },
//     { label: 'Active Campaigns', value: '8', change: '+2' },
//     { label: 'Total Spend', value: '$28,500', change: '+$4,200' },
//     { label: 'Avg. ROI', value: '6.4x', change: '+0.8x' }
//   ];

//   const handleCreateCampaign = () => {
//     setSelectedCampaign(null);
//     setIsModalOpen(true);
//   };

//   const handleEditCampaign = (campaign: Campaign) => {
//     setSelectedCampaign(campaign);
//     setIsModalOpen(true);
//   };

//   const handleDeleteCampaign = (campaign: Campaign) => {
//     setSelectedCampaign(campaign);
//     setIsDeleteDialogOpen(true);
//   };

//   const handleSubmitCampaign = async (campaignData: Partial<Campaign>) => {
//     setIsLoading(true);
//     await new Promise(resolve => setTimeout(resolve, 1000));
    
//     if (selectedCampaign) {
//       alert(`Campaign ${selectedCampaign.id} updated successfully!`);
//     } else {
//       alert('New campaign created successfully!');
//     }
    
//     setIsLoading(false);
//     setIsModalOpen(false);
//   };

//   const handleConfirmDelete = async () => {
//     if (!selectedCampaign) return;
    
//     setIsLoading(true);
//     await new Promise(resolve => setTimeout(resolve, 1000));
    
//     alert(`Campaign ${selectedCampaign.id} deleted successfully!`);
    
//     setIsLoading(false);
//     setIsDeleteDialogOpen(false);
//     setSelectedCampaign(null);
//   };

//   return (
//     <>
//       <PageHeader
//         title="Marketing"
//         description="Manage campaigns and track performance"
//         actionButton={{
//           label: 'Create Campaign',
//           onClick: handleCreateCampaign,
//           icon: 'add'
//         }}
//         stats={stats}
//       />
      
//       <MarketingCampaigns 
//         onEdit={handleEditCampaign}
//         onDelete={handleDeleteCampaign}
//       />

//       <CampaignModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onSubmit={handleSubmitCampaign}
//         campaign={selectedCampaign}
//         isLoading={isLoading}
//       />

//       <DeleteDialog
//         isOpen={isDeleteDialogOpen}
//         onClose={() => setIsDeleteDialogOpen(false)}
//         onConfirm={handleConfirmDelete}
//         title="Delete Campaign"
//         description="Are you sure you want to delete this campaign? All campaign data will be permanently removed."
//         itemName={selectedCampaign?.name}
//         isLoading={isLoading}
//       />
//     </>
//   );
// };

// export default Marketing;

import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import MarketingCampaigns from '../components/MarketingCampaigns';
import CampaignModal from '../components/modals/CampaignModal';
import DeleteDialog from '../components/dialogs/DeleteDialog';
import { Campaign } from '../types';

const Marketing: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const stats = [
    { label: 'Total Campaigns', value: '15', change: '+3' },
    { label: 'Active Campaigns', value: '8', change: '+2' },
    { label: 'Total Spend', value: '$28,500', change: '+$4,200' },
    { label: 'Avg. ROI', value: '6.4x', change: '+0.8x' }
  ];

  const handleCreateCampaign = () => {
    setSelectedCampaign(null);
    setIsModalOpen(true);
  };

  const handleEditCampaign = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
    setIsModalOpen(true);
  };

  const handleDeleteCampaign = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
    setIsDeleteDialogOpen(true);
  };

  const handleSubmitCampaign = async (campaignData: Partial<Campaign>) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (selectedCampaign) {
      alert(`Campaign "${campaignData.name || selectedCampaign.name}" updated successfully!`);
    } else {
      alert(`Campaign "${campaignData.name}" created successfully!`);
    }
    
    setIsLoading(false);
    setIsModalOpen(false);
    setSelectedCampaign(null);
  };

  const handleConfirmDelete = async () => {
    if (!selectedCampaign) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert(`Campaign "${selectedCampaign.name}" deleted successfully!`);
    
    setIsLoading(false);
    setIsDeleteDialogOpen(false);
    setSelectedCampaign(null);
  };

  return (
    <>
      <PageHeader
        title="Marketing"
        description="Manage campaigns and track performance"
        actionButton={{
          label: 'Create Campaign',
          onClick: handleCreateCampaign,
          icon: 'add'
        }}
        stats={stats}
      />
      
      <MarketingCampaigns 
        onEdit={handleEditCampaign}
        onDelete={handleDeleteCampaign}
      />

      <CampaignModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedCampaign(null);
        }}
        onSubmit={handleSubmitCampaign}
        campaign={selectedCampaign}
        isLoading={isLoading}
      />

      <DeleteDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => {
          setIsDeleteDialogOpen(false);
          setSelectedCampaign(null);
        }}
        onConfirm={handleConfirmDelete}
        title="Delete Campaign"
        description="Are you sure you want to delete this campaign? All campaign data will be permanently removed."
        itemName={selectedCampaign?.name}
        isLoading={isLoading}
      />
    </>
  );
};

export default Marketing;