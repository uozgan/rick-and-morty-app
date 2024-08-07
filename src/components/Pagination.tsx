import React from "react";

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, onPageChange }: PaginationProps) => {
  return (
    <div>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button onClick={() => onPageChange(currentPage + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
