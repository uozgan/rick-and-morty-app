import React from "react";
import CharacterCard from "./CharacterCard";
import "../styles/CharacterList.css";
import { Character } from "../types/Character";

interface CharacterListProps {
  data: { info: any; results: Character[] };
  onCharacterClick: (id: number) => void;
}

const CharacterList = ({ data, onCharacterClick }: CharacterListProps) => {
  return (
    <div className="character-list">
      {data.results.map((character: Character) => (
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
