import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Like from "./Like";

const CocktailCard = ({ cocktail, isLiked }) => {
  const {
    idDrink,
    strDrink,
    strDrinkThumb,
    strGlass,
    strCategory,
    strAlcoholic,
  } = cocktail;

  const imgStyles = {
    backgroundImage: `linear-gradient(190deg, #fa7c30 20%, rgba(0, 0, 0, 0)20%), url(${strDrinkThumb})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "280px",
  };

  return (
    <Card style={{ width: "18rem" }}>
      <div className="rounded-top" style={imgStyles}>
        <div className="text-end mx-2">
          <Like idDrink={idDrink} isPresent={isLiked} />
        </div>
      </div>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>{strDrink}</Card.Title>
        </div>

        <Card.Text>{strCategory}</Card.Text>
        <Card.Text>{strAlcoholic}</Card.Text>
        <Card.Text>{strGlass}</Card.Text>

        <Link
          to={`/cocktail/${idDrink}`}
          className="btn btn-primary"
          // state={{dataLike: like}}
        >
          see more...
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CocktailCard;
