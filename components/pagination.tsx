// src/components/pagination.tsx
import React from 'react';
import Image from 'next/image';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-300' : 'bg-gray-200'}`}
        disabled={currentPage === 1}
      >
         <Image
          src="/img/arrowleft.png"
          width={20}
          height={20}
          alt="Logo"
        />
      </button>
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`bg-[#931c1c] border-2 customLight m-3 w-3 p-2 rounded-md ${
            page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-300' : 'bg-gray-200'}`}
        disabled={currentPage === totalPages}
      >
        <Image
          src="/img/arrowright.png"
          width={20}
          height={20}
          alt="Logo"
        />
      </button>
    </div>
  );
};

export default Pagination;