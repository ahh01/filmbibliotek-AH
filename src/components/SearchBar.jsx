import React, { useState } from "react";

function SearchBar({ searchQuery, onSearch }) {
  const [input, setInput] = useState(searchQuery);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSearch = () => {
    onSearch(input);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(input);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4 p-4">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Sök efter filmer..."
        className="p-2 w-64 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Sök
      </button>
    </div>
  );
}

export default SearchBar;
