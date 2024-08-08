import React, { useState } from "react";
import "../styles/GenderFilter.css";

interface GenderFilterProps {
  onFilter: (gender: string) => void;
}

const allGenders = ["Male", "Female", "Unknown", "Genderless"];

const GenderFilter = ({ onFilter }: GenderFilterProps) => {
  const [selectedGender, setSelectedGender] = useState<string>("");

  const handleToggle = (gender: string) => {
    const newGender = selectedGender === gender ? "" : gender;
    setSelectedGender(newGender);
    onFilter(newGender);
  };

  return (
    <div className="filter-buttons">
      <button className="filter-btn" onClick={() => handleToggle("")}>
        All
      </button>
      {allGenders.map((gender, i) => (
        <button
          key={i}
          className="filter-btn"
          onClick={() => handleToggle(gender)}
        >
          {gender}
        </button>
      ))}
    </div>
  );
};

export default GenderFilter;
