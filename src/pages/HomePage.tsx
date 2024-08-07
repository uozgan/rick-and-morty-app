import React, { useState } from "react";
import CharacterList from "../components/CharacterList";
import useAxios from "../api/useAxios";
import Searchbar from "../components/Searchbar";
import GenderFilter from "../components/GenderFilter";
import Pagination from "../components/Pagination";

const HomePage = () => {
  const [page, setPage] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");

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
      <h3>Home Page</h3>
      <Searchbar onSearch={(search) => setName(search)} />
      <GenderFilter onFilter={(gen) => setGender(gen)} />
      <CharacterList data={response} />
      <Pagination
        currentPage={page}
        onPageChange={(page: number) => setPage(page)}
      />
    </div>
  );
};

export default HomePage;
