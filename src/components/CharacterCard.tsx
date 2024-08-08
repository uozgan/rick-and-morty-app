import React from "react";
import "../styles/CharacterCard.css";
import { Character } from "../types/Character";

interface CharacterCardProps {
  character: Character;
  onClick?: () => void;
}

const CharacterCard = ({ character, onClick }: CharacterCardProps) => {
  return (
    <div onClick={onClick} className="card">
      <img src={character.image} alt={character.name} />
      <div className="overlay">
        <h3>{character.name}</h3>
        <p>{character.status}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
