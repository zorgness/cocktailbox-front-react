import React from "react";
import Popular from "../components/Popular";
import Filter from "./Filter";
import FilterResultsContainer from "./FilterResultsContainer";

const HomePage = ({ filter }) => {
  return (
    <div>
      <div
        className="card-category"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://www.trucsdenana.com/wp-content/uploads/2017/06/cocktail-1.jpg)`,
        }}
      >
        <h1 className="text-center mx-3 d-flex align-items-center">
          Cocktail Box
        </h1>
      </div>

      <div>
        <div className="d-flex flex-column mt-5">
          <Filter />
          {filter ? <FilterResultsContainer filter={filter} /> : <Popular />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
