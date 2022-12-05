import React from "react";
import CocktailCard from "../cocktail/CocktailCard";
import { useFindUserLikes } from "../../../customHooks/actions/fetchDataAction";
import Pagination from "../../Pagination";

const Cocktails = ({ cocktails }) => {
  const userId = localStorage.getItem("userId");

  const state = useFindUserLikes(userId);

  const { data } = state;

  const [toDisplay, setToDisplay] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  React.useEffect(() => {
    setToDisplay(cocktails.slice(indexOfFirstItem, indexOfLastItem));
  }, [cocktails, indexOfFirstItem, indexOfLastItem]);

  const findCardIsLikedByUser = (id) => {
    const tmp = data?.filter(({ idDrink }) => {
      return idDrink === id;
    });
    return tmp?.length > 0;
  };

  return (
    <div>
      <div className="d-flex justify-content-center mt-3">
        <Pagination
          dataLength={cocktails.length}
          currentPage={currentPage}
          total={cocktails?.length}
          limit={itemsPerPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
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
    </div>
  );
};

export default Cocktails;
