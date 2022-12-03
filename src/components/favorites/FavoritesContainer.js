import React from "react";
import { connect } from "react-redux";
import { useFindUserLikes } from "../../customHooks/actions/fetchDataAction";
import Loader from "../Loader";
import FavoritePage from "./FavoritePage";
import Favorites from "./Favorites";

const FavoritesContainer = ({ authData }) => {
  const userId = localStorage.getItem("userId");

  const state = useFindUserLikes(userId);

  const { data, status } = state;

  const idList = data?.map(({ idDrink }) => idDrink);

  if (status === "fail") {
    return <FavoritePage />;
  } else if (status === "idle") {
    return <FavoritePage />;
  } else if (status === "fetching") {
    return <Loader />;
  } else if (status === "done") {
    return <Favorites list={idList} />;
  }
};

const mapStateToProps = (state) => {
  return {
    authData: state.auth,
  };
};

export default connect(mapStateToProps, null)(FavoritesContainer);
