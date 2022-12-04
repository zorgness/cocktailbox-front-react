import React from "react";
import CocktailCard from "../cocktail/CocktailCard";
import { useFindUserLikes } from "../../../customHooks/actions/fetchDataAction";
import Pagination from "../../Pagination";

const Cocktails = ({ cocktails }) => {
  const userId = localStorage.getItem("userId");

  const state = useFindUserLikes(userId);

  const { data } = state;

  const [toDisplay, setToDisplay] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [indexItems, setIndexItems] = React.useState(0);

  console.log(currentPage);

  React.useEffect(() => {
    setIndexItems(currentPage * 5);
    setToDisplay(cocktails.slice(indexItems, indexItems + 5));
  }, [cocktails, indexItems, currentPage]);

  const findCardIsLikedByUser = (id) => {
    const tmp = data?.filter(({ idDrink }) => {
      return idDrink === id;
    });
    return tmp?.length > 0;
  };

  return (
    <div>
      <div className="d-flex justify-content-around flex-wrap gap-5 m-5">
        {toDisplay.map((cocktail) => {
          return (
            <CocktailCard
              key={cocktail.idDrink}
              cocktail={cocktail}
              isLiked={findCardIsLikedByUser(cocktail.idDrink)}
            />
          );
        })}
      </div>

      <Pagination
        currentPage={currentPage}
        total={cocktails?.length}
        limit={5}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default Cocktails;
