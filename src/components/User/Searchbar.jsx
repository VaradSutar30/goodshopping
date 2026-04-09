import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) onSearch(query);
  };

  const clearSearch = () => {
    setQuery("");
    if (onSearch) onSearch("");
  };

  return (
    <div className="relative w-full max-w-md">

      {/* INPUT */}
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-4 pr-10 py-2 border rounded-lg outline-none 
        focus:ring-2 focus:ring-[#fac039] transition shadow-sm focus:shadow-md"
      />

      {/* SEARCH ICON */}
      <button
        onClick={handleSearch}
        className="absolute right-8 top-2.5 text-gray-400 hover:text-black"
      >
        <CiSearch size={20} />
      </button>

      {/* CLEAR BUTTON */}
      {query && (
        <button
          onClick={clearSearch}
          className="absolute right-2 top-2.5 text-gray-400 hover:text-red-500"
        >
          <IoMdClose size={18} />
        </button>
      )}
    </div>
  );
};

export default Searchbar;