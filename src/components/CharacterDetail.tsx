import React from "react";
import "../styles/CharacterDetail.css";
import { Character } from "../types/Character";

interface CharacterDetailProps {
  onBack: () => void;
  characterDetails: Character;
}

const CharacterDetail = ({
  onBack,
  characterDetails,
}: CharacterDetailProps) => {
  return (
    <div className="character-detail-container">
      {characterDetails && (
        <div className="character-detail-content">
          <img
            src={characterDetails.image}
            alt={characterDetails.name}
            className="character-image"
          />
          <div className="character-info">
            <h2 className="character-name">{characterDetails.name}</h2>
            <p>
              <strong>Status:</strong> {characterDetails.status}
            </p>
            <p>
              <strong>Locatio</strong>n: {characterDetails.location.name}
            </p>
            <p>
              <strong>Species</strong>: {characterDetails.species}
            </p>
            <p>
              <strong>Gender:</strong> {characterDetails.gender}
            </p>
            <p>
              <strong>Origin:</strong> {characterDetails.origin.name}
            </p>
          </div>
        </div>
      )}
      <button onClick={onBack} className="back-button">
        Back
      </button>
    </div>
  );
};

export default CharacterDetail;
