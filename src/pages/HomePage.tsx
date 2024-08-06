import React from "react";
import CharacterList from "../components/CharacterList";
import useAxios from "../api/useAxios";

const HomePage = () => {
  const { response, error, loading } = useAxios({ url: "/character" });

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
      <div>
        <CharacterList data={response} />
      </div>
    </div>
  );
};

export default HomePage;
