import React from "react";
import Popular from "../components/Popular";
import Filter from "./Filter";
import FilterResultsContainer from "./FilterResultsContainer";
import Footer from "./Footer";

const HomePage = ({ filter }) => {
  return (
    <div>
      <div
        className="card-category"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://source.unsplash.com/random/?cocktails)`,
        }}
      >
        <h1 className="text-center mx-3 d-flex align-items-center">
          Cocktail Box
        </h1>
      </div>

      <div>
        <div className="text-center mt-4">
          <h6>Find all the best cocktails and beverages</h6>
        </div>
        <div className="d-flex flex-column mt-5">
          <Filter />
          {filter ? <FilterResultsContainer filter={filter} /> : <Popular />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
