import React, { useState } from "react";
import CharacterList from "../components/CharacterList";
import useAxios from "../api/useAxios";
import Searchbar from "../components/Searchbar";
import GenderFilter from "../components/GenderFilter";
import Pagination from "../components/Pagination";
import CharacterDetail from "../components/CharacterDetail";
import "../styles/HomePage.css";
import { Character } from "../types/Character";

const HomePage = () => {
  const [page, setPage] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [selectedCharacterId, setSelectedCharacterId] = useState<number | null>(
    null
  );

  const { response, error, loading } = useAxios({
    url: `/character?page=${page}&name=${name}&gender=${gender}`,
  });

  if (loading) {
    return <h4 className="loading">Loading...</h4>;
  }

  if (error || !response) {
    return <p className="error">Something went wrong!</p>;
  }

  return (
    <div className="homepage-container">
      <img
        src="/rick-and-morty.svg"
        alt="Rick and Morty"
        className="title-image"
      />
      {selectedCharacterId ? (
        <CharacterDetail
          onBack={() => setSelectedCharacterId(null)}
          characterDetails={response.results.find(
            (char: Character) => char.id === selectedCharacterId
          )}
        />
      ) : (
        <div>
          <div className="search-filter-container">
            <Searchbar
              onSearch={(search) => {
                setName(search);
                setGender("");
              }}
            />
            <GenderFilter
              onFilter={(gen) => {
                setGender(gen);
                setName("");
              }}
            />
          </div>
          <CharacterList
            data={response}
            onCharacterClick={(id) => {
              setSelectedCharacterId(id);
            }}
          />
          <Pagination
            currentPage={page}
            onPageChange={(page: number) => setPage(page)}
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;
