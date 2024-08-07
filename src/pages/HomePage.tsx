import React, { useState } from "react";
import CharacterList from "../components/CharacterList";
import useAxios from "../api/useAxios";
import Searchbar from "../components/Searchbar";
import GenderFilter from "../components/GenderFilter";
import Pagination from "../components/Pagination";
import CharacterDetail from "../components/CharacterDetail";

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
    return <h4>Loading</h4>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  console.log(response);

  return (
    <div>
      {selectedCharacterId ? (
        <CharacterDetail
          onBack={() => setSelectedCharacterId(null)}
          characterDetails={response.results.find(
            (char: any) => char.id === selectedCharacterId
          )}
        />
      ) : (
        <div>
          <Searchbar onSearch={(search) => setName(search)} />
          <GenderFilter onFilter={(gen) => setGender(gen)} />
          <CharacterList
            data={response}
            onCharacterClick={(id) => {
              setSelectedCharacterId(id);
            }}
          />
        </div>
      )}
      <Pagination
        currentPage={page}
        onPageChange={(page: number) => setPage(page)}
      />
    </div>
  );
};

export default HomePage;
