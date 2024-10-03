import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-center gap-4 sm:gap-10 md:mt-8 mb-8 p-4 rounded-md">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="border-2 border-gray-500 px-4 sm:px-6 py-2 rounded-xl font-semibold tracking-widest transition duration-300 ease-in-out  disabled:opacity-50"
      >
        Prev
      </button>

      <span className="font-semibold text-md sm:text-xl">{`Page ${currentPage} of ${totalPages}`}</span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="border-2 border-gray-500 px-4 sm:px-6 py-2 rounded-xl font-semibold tracking-widest transition duration-300 ease-in-out disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
