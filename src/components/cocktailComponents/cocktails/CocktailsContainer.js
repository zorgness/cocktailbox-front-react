import React from "react";
import {
  useFindCocktailByName,
  ErrorDisplay,
} from "../../../customHooks/actions/fetchDataAction";
import Cocktails from "./Cocktails";
import HomePage from "../../HomePage";
import { connect } from "react-redux";
import Loader from "../../Loader";
import FilterResultsContainer from "../../FilterResultsContainer";

const CocktailsContainer = ({ name, authData, filter }) => {
  const state = useFindCocktailByName(name);

  console.log(filter);

  const { data, error, status } = state;

  if (status === "fail") {
    return <ErrorDisplay error={error} />;
  } else if (status === "idle" && filter === undefined) {
    return <HomePage authData={authData} />;
  } else if (status === "fetching") {
    return <Loader />;
  } else if (status === "done") {
    return <Cocktails cocktails={data} />;
  } else if (status === "idle" && filter !== undefined) {
    return <FilterResultsContainer filter={filter} />;
  }
};

const mapStateToProps = (state) => {
  return {
    authData: state.auth,
  };
};

export default connect(mapStateToProps, null)(CocktailsContainer);
