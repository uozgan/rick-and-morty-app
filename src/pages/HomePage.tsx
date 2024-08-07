import React, { useState } from "react";
import CharacterList from "../components/CharacterList";
import useAxios from "../api/useAxios";
import Searchbar from "../components/Searchbar";

const HomePage = () => {
  const [page, setPage] = useState<number>(1);

  const { response, error, loading } = useAxios({
    url: `/character?page=${page}`,
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
      <Searchbar onSearch={() => {}} />
      {/* <Filter /> */}

      <CharacterList data={response} />
    </div>
  );
};

export default HomePage;
