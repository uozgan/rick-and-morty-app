import React from "react";
import CharacterCard from "./CharacterCard";

interface CharacterListProps {
  data: any;
  onCharacterClick: (id: number) => void;
}

const CharacterList = ({ data, onCharacterClick }: CharacterListProps) => {
  return (
    <div>
      {data.results.map((character: any) => (
        <CharacterCard
          key={character.id}
          character={character}
          onClick={() => onCharacterClick(character.id)}
        />
      ))}
    </div>
  );
};

export default CharacterList;
