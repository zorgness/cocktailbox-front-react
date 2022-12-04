import React from "react";
import CocktailsContainer from "./cocktailComponents/cocktails/CocktailsContainer";
import { SearchContext } from "../SearchContext";
import FilterResultsContainer from "./FilterResultsContainer";

const Home = ({ name, filter, authData, handleSearch, handleFilter }) => {
  return (
    <div>
      <SearchContext.Provider value={{ handleSearch, handleFilter }}>
        <CocktailsContainer name={name} authData={authData} />
        <FilterResultsContainer filter={filter} />
      </SearchContext.Provider>
    </div>
  );
};

export default Home;
