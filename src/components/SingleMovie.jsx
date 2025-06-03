import React from "react";

function SingleMovie({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative w-full max-w-md mx-2 p-4 max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-3 right-5 text-gray-700 hover:text-red-500 text-3xl z-10"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default SingleMovie;
