import React from "react";

interface CharacterDetailProps {
  onBack: () => void;
  characterDetails: any;
}

const CharacterDetail = ({
  onBack,
  characterDetails,
}: CharacterDetailProps) => {
  return (
    <div className="character-detail">
      <button onClick={onBack}>Back</button>

      {characterDetails && (
        <div>
          <img src={characterDetails.image} alt={characterDetails.name} />
          <h2>{characterDetails.name}</h2>
          <p>Status: {characterDetails.status}</p>
          <p>Species: {characterDetails.species}</p>
          <p>Gender: {characterDetails.gender}</p>
          <p>Origin: {characterDetails.origin.name}</p>
        </div>
      )}
    </div>
  );
};

export default CharacterDetail;
