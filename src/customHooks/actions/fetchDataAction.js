import * as React from "react";
import { dataReducer } from "../reducers/dataReducer";
import {
  fetchDataByName,
  fetchDataById,
  fetchDataByIngredient,
  fetchDataFilter,
} from "../../api/fetchCocktailData";
import { fetchDataWithMethod } from "../../api/fetchDataWithMethod";
import { fetchData } from "../../api/fetchData";
import {
  fetchLikesByUserId,
  fetchNumberOfLikesForDrink,
} from "../../api/fetchLikesData";

const useFetchData = () => {
  const initialState = {
    data: null,
    error: null,
    status: "idle",
  };

  const [state, dispatch] = React.useReducer(dataReducer, initialState);

  const { data, error, status } = state;

  const execute = React.useCallback((promise) => {
    dispatch({ type: "fetching" });
    promise
      .then((data) => dispatch({ type: "done", payload: data }))
      .catch((error) => dispatch({ type: "fail", error }));
  }, []);

  return { data, error, status, execute };
};

export const useFindCocktailByName = (name) => {
  const { data, error, status, execute } = useFetchData();
  React.useEffect(() => {
    if (!name) {
      return;
    }
    execute(fetchDataByName(name));
  }, [name, execute]);

  return { data, error, status };
};

export const useFindCocktailByFilter = (filter) => {
  const { data, error, status, execute } = useFetchData();
  React.useEffect(() => {
    if (!filter) {
      return;
    }
    execute(fetchDataFilter(filter));
  }, [filter, execute]);

  return { data, error, status };
};

export const useFindCocktailById = (id) => {
  const { data, error, status, execute } = useFetchData();
  React.useEffect(() => {
    if (!id) {
      return;
    }
    execute(fetchDataById(id));
  }, [id, execute]);

  return { data, error, status };
};

export const useFindCocktailByIngredient = (ingredient) => {
  const { data, error, status, execute } = useFetchData();
  React.useEffect(() => {
    if (!ingredient) {
      return;
    }
    execute(fetchDataByIngredient(ingredient));
  }, [ingredient, execute]);

  return { data, error, status };
};

export const useLikeCocktail = (userId, idDrink) => {
  const { data, error, status, execute } = useFetchData();
  React.useEffect(() => {
    if (!userId && !idDrink) {
      return;
    }
    const urlMain = process.env.REACT_APP_URL_MAIN;
    const options = { account: `/api/users/${userId}`, idDrink: idDrink };
    execute(fetchDataWithMethod(urlMain + "/api/likes", "POST", options));
  }, [userId, idDrink, execute]);

  return { data, error, status };
};

export const ErrorDisplay = ({ error }) => {
  return (
    <div style={{ color: "red" }} className="container">
      Error on research <pre style={{ color: "grey" }}> {error.message}</pre>
    </div>
  );
};

export const useFindUserLikes = (userId) => {
  const { data, error, status, execute } = useFetchData();
  React.useEffect(() => {
    if (!userId) {
      return;
    }
    execute(fetchLikesByUserId(userId));
  }, [userId, execute]);

  return { data, error, status };
};

export const useCommentsByCocktailId = (idDrink) => {
  const { data, error, status, execute } = useFetchData();
  React.useEffect(() => {
    if (!idDrink) {
      return;
    }
    const urlMain = process.env.REACT_APP_URL_MAIN;
    execute(fetchData(urlMain + "/api/comments?idDrink=" + idDrink));
  }, [idDrink, execute]);

  return { data, error, status };
};

export const useFindCommentOwner = (userId) => {
  const { data, error, status, execute } = useFetchData();
  React.useEffect(() => {
    if (!userId) {
      return;
    }
    const urlMain = process.env.REACT_APP_URL_MAIN;
    execute(fetchData(urlMain + userId));
  }, [userId, execute]);

  return { data, error, status };
};

export const useFindNumberOfLikes = (idDrink) => {
  const { data, error, status, execute } = useFetchData();
  React.useEffect(() => {
    if (!idDrink) {
      return;
    }

    execute(fetchNumberOfLikesForDrink(idDrink));
  }, [idDrink, execute]);

  return { data, error, status };
};
