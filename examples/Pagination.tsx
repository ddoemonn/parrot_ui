import { useState } from 'react';

import Pagination from '@/components/Pagination';

export default function PaginationExample() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 10; // Example total pages

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
