import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import ReportsAnalytics from '../components/ReportsAnalytics';
import ReportModal from '../components/modals/ReportModal';
import DeleteDialog from '../components/dialogs/DeleteDialog';
import { Report } from '../types';

const Reports: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const stats = [
    { label: 'Total Reports', value: '24', change: '+4' },
    { label: 'This Month', value: '8', change: '+2' },
    { label: 'Total Downloads', value: '1,234', change: '+156' },
    { label: 'Avg. Size', value: '3.4 MB', change: '-0.2 MB' }
  ];

  const handleGenerateReport = () => {
    setIsModalOpen(true);
  };

  const handleDeleteReport = (report: Report) => {
    setSelectedReport(report);
    setIsDeleteDialogOpen(true);
  };

  const handleGenerate = async (reportData: Partial<Report>) => {
    setIsLoading(true);
    // Simulate report generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert(`Report "${reportData.name}" generated successfully! It will be available for download shortly.`);
    
    setIsLoading(false);
    setIsModalOpen(false);
  };

  const handleConfirmDelete = async () => {
    if (!selectedReport) return;
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert(`Report "${selectedReport.name}" deleted successfully!`);
    
    setIsLoading(false);
    setIsDeleteDialogOpen(false);
    setSelectedReport(null);
  };

  return (
    <>
      <PageHeader
        title="Reports & Analytics"
        description="Generate and manage business reports"
        actionButton={{
          label: 'Generate Report',
          onClick: handleGenerateReport,
          icon: 'add'
        }}
        stats={stats}
      />
      
      <ReportsAnalytics 
        onDelete={handleDeleteReport}
      />

      <ReportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onGenerate={handleGenerate}
        isLoading={isLoading}
      />

      <DeleteDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => {
          setIsDeleteDialogOpen(false);
          setSelectedReport(null);
        }}
        onConfirm={handleConfirmDelete}
        title="Delete Report"
        description="Are you sure you want to delete this report? The file will be permanently removed."
        itemName={selectedReport?.name}
        isLoading={isLoading}
      />
    </>
  );
};

export default Reports;