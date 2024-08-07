import React from "react";
import CharacterCard from "./CharacterCard";

interface CharacterListProps {
  data: any;
}

const CharacterList = ({ data }: CharacterListProps) => {
  return (
    <div>
      {data.results.map((character: any) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
