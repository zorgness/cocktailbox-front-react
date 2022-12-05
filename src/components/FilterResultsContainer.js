import React from "react";
import {
  useFindCocktailByFilter,
  ErrorDisplay,
} from "../customHooks/actions/fetchDataAction";
import Cocktails from "../components/cocktailComponents/cocktails/Cocktails";
import Loader from "./Loader";
import HomePage from "./HomePage";

const FilterResultsContainer = ({ filter }) => {
  const state = useFindCocktailByFilter(filter);

  const { data, error, status } = state;

  // console.log(data);
  // console.log(status);
  // console.log(error);

  if (status === "fail") {
    return <ErrorDisplay error={error} />;
  } else if (status === "idle") {
    return null;
  } else if (status === "fetching") {
    return <Loader />;
  } else if (status === "done") {
    return <Cocktails cocktails={data} />;
  }
};

export default FilterResultsContainer;
