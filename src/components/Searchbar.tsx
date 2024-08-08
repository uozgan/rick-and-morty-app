import React, { useState } from "react";
import "../styles/Searchbar.css";

interface SearchBarProps {
  onSearch: (search: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [search, setSearch] = useState<string>("");

  const handleSearch = () => {
    onSearch(search);
  };

  return (
    <div className="searchbar-container">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search characters..."
        className="searchbar"
      />
      <button onClick={handleSearch} className="filter-btn">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
