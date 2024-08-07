import React from "react";

interface CharacterCardProps {
  character: any; //Character;
  onClick?: () => void;
}

const CharacterCard = ({ character, onClick }: CharacterCardProps) => {
  return (
    <div>
      CharacterCard
      <div onClick={onClick}>{character.name}</div>
      <img src={character.image} alt={character.name} />
    </div>
  );
};

export default CharacterCard;
