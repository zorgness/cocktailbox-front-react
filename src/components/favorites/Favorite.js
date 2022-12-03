import React from "react";
import { useFindCocktailById } from "../../customHooks/actions/fetchDataAction";
import CocktailCard from "../cocktailComponents/cocktail/CocktailCard";
import { ErrorDisplay } from "../../customHooks/actions/fetchDataAction";
import Loader from "../Loader";
import { useFindUserLikes } from "../../customHooks/actions/fetchDataAction";

const Favorite = ({ id }) => {
  const state = useFindCocktailById(id);

  const userId = localStorage.getItem("userId");

  const state2 = useFindUserLikes(userId);

  const findLike = (id) => {
    const tmp = state2?.data?.filter(({ idDrink }) => {
      return idDrink === id;
    });
    return tmp;
  };

  const { data, error, status } = state;

  if (status === "fail") {
    return <ErrorDisplay error={error} />;
  } else if (status === "idle") {
    return "...";
  } else if (status === "fetching") {
    return <Loader />;
  } else if (status === "done") {
    return <CocktailCard cocktail={data[0]} like={findLike(data[0].idDrink)} />;
  }
};

export default Favorite;
