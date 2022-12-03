import React from "react";
import CocktailsContainer from "./cocktailComponents/cocktails/CocktailsContainer";
import { SearchContext } from "../SearchContext";

const Home = ({ name, authData, handleSearch }) => {
  return (
    <div>
      <SearchContext.Provider value={handleSearch}>
        <CocktailsContainer name={name} authData={authData} />
      </SearchContext.Provider>
    </div>
  );
};

export default Home;
