import React from 'react';
import PageHeader from '../components/PageHeader';
import RatesReviews from '../components/RatesReviews';

const Rates: React.FC = () => {
  const stats = [
    { label: 'Total Reviews', value: '1,284', change: '+128' },
    { label: 'Avg. Rating', value: '4.2', change: '+0.1' },
    { label: 'Pending Review', value: '24', change: '-8' },
    { label: '5★ Ratings', value: '768', change: '+89' }
  ];

  return (
    <>
      <PageHeader
        title="Rates & Reviews"
        description="Manage customer ratings and reviews"
        stats={stats}
      />
      <RatesReviews />
    </>
  );
};

export default Rates;