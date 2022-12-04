import React, { useContext } from "react";
import { SearchContext } from "../SearchContext";

const Filter = () => {
  const { handleFilter } = useContext(SearchContext);

  const handleClick = (e) => {
    // handleFilter(e.target.name);
    console.log(e.target.name);
  };
  return (
    <div className="d-flex justify-content-around flex-wrap gap-3">
      <div className="div">
        <button
          className="filter-button alcoholic"
          name="a=Alcoholic"
          onClick={handleClick}
        >
          Alcoholic
        </button>
      </div>
      <div className="div">
        <button
          className="filter-button non-alcoholic"
          name="a=Non_Alcoholic"
          onClick={handleClick}
        >
          Non Alcoholic
        </button>
      </div>
      <div className="div">
        <button
          className="filter-button ordinary-drink"
          name="c=Ordinary_Drink"
          onClick={handleClick}
        >
          Ordinary Drink
        </button>
      </div>
      <div className="div">
        <button
          className="filter-button cocktail-drink"
          name="c=Cocktail"
          onClick={handleClick}
        >
          Cocktail
        </button>
      </div>
    </div>
  );
};

export default Filter;
