import React from "react";

interface CharacterListProps {
  data: any;
}

const CharacterList = ({ data }: CharacterListProps) => {
  return (
    <div>
      {data.results.map((character: any) => (
        <div key={character.name}>{character.name}</div> //TODO: CharacterCard Implementation
      ))}
    </div>
  );
};

export default CharacterList;
