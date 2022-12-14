import React from "react";
import CommentsContainer from "../../comments/CommentsContainer";
import { useCommentsByCocktailId } from "../../../customHooks/actions/fetchDataAction";
import Rating from "../../comments/Rating";

const Cocktail = ({ data }) => {
  const {
    idDrink,
    strDrink,
    strGlass,
    strDrinkThumb,
    strInstructions,
    strInstructionsFR,
  } = data[0];

  // Get all ingredients not null
  const ingredients = [];
  for (const [, value] of Object.entries(data[0]).filter(
    (element) => element[0].includes("strIngredient") && element[1] !== null
  )) {
    ingredients.push(value);
  }

  // Get all measures not null
  const measures = [];
  for (const [, value] of Object.entries(data[0]).filter(
    (element) => element[0].includes("strMeasure") && element[1] !== null
  )) {
    measures.push(value);
  }

  const state = useCommentsByCocktailId(idDrink);

  const allDrinkRatings = state?.data?.["hydra:member"]?.map(
    ({ rating }) => rating
  );

  const avgRating =
    allDrinkRatings?.length > 0
      ? allDrinkRatings?.reduce((a, b) => a + b) / allDrinkRatings?.length
      : 0;

  return (
    <div className="text-center mt-5">
      <h2 id="title">{strDrink}</h2>
      <p>{strGlass}</p>

      <Rating rating={avgRating} />

      <div className="d-flex flex-wrap justify-content-around align-items-center">
        <img
          src={strDrinkThumb}
          className="img-fluid m-3 rounded"
          style={{ maxWidth: "320px", height: "auto" }}
          alt={strDrink}
        />
        <div className="d-flex">
          <div style={{ maxWidth: "300px " }} className="m-3">
            <ul className="list-group list-group-flush ingredients list-unstyled">
              <li className="list-group-item disabled text-start">
                Ingredients
              </li>
              {ingredients.map((ingredient, index) => {
                return (
                  <li
                    className="list-group-item text-start border-0"
                    key={index}
                  >
                    {ingredient}
                  </li>
                );
              })}
            </ul>
          </div>

          <div style={{ maxWidth: "300px" }} className="m-3">
            <ul className="list-group list-group-flush measures list-unstyled">
              <li className="list-group-item disabled text-start">Measures</li>
              {measures.map((measure, index) => {
                return (
                  <li
                    className="list-group-item text-start border-0"
                    key={index}
                  >
                    {measure}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-5 text-center">
        {strInstructionsFR !== null ? (
          <p className="m-5">{strInstructionsFR}</p>
        ) : (
          <p className="m-5">{strInstructions}</p>
        )}
      </div>

      {state?.status === "done" && (
        <CommentsContainer idDrink={idDrink} name={strDrink} />
      )}
    </div>
  );
};

export default Cocktail;
