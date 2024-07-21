import React from 'react';

import Breadcrumb from '@/components/Breadcrumb';

const BreadcrumbExample: React.FC = () => {
  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Library', href: '/library' }, { label: 'Data' }];

  return (
    <div className="container mx-auto p-4">
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
};

export default BreadcrumbExample;
