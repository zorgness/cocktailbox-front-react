import React from "react";
import CocktailsContainer from "./cocktailComponents/cocktails/CocktailsContainer";
import { SearchContext } from "../SearchContext";

const Home = ({ name, filter, authData, handleSearch, handleFilter }) => {
  return (
    <div id="cocktailbox">
      <SearchContext.Provider value={{ handleSearch, handleFilter }}>
        <CocktailsContainer name={name} authData={authData} filter={filter} />
      </SearchContext.Provider>
    </div>
  );
};

export default Home;
