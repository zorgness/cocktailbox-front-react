import React from "react";
import {
  useFindCocktailByName,
  ErrorDisplay,
} from "../../../customHooks/actions/fetchDataAction";
import Cocktails from "./Cocktails";
import HomePage from "../../HomePage";
import { connect } from "react-redux";
import Loader from "../../Loader";

const CocktailsContainer = ({ name, authData, filter }) => {
  const state = useFindCocktailByName(name);

  const { data, error, status } = state;

  if (status === "fail") {
    return <ErrorDisplay error={error} />;
  } else if (status === "idle") {
    return <HomePage authData={authData} filter={filter} />;
  } else if (status === "fetching") {
    return <Loader />;
  } else if (status === "done") {
    return <Cocktails cocktails={data} />;
  }
};

const mapStateToProps = (state) => {
  return {
    authData: state.auth,
  };
};

export default connect(mapStateToProps, null)(CocktailsContainer);
