import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (search: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [search, setSearch] = useState<string>("");

  const handleSearch = () => {
    onSearch(search);
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search characters..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
