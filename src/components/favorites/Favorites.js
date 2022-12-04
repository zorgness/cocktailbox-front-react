import React from "react";
import Favorite from "./Favorite";
import Pagination from "../Pagination";

const Favorites = ({ list }) => {
  const [toDisplay, setToDisplay] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [indexItems, setIndexItems] = React.useState(0);

  React.useEffect(() => {
    setIndexItems(currentPage * 5);
    setToDisplay(list.slice(indexItems, indexItems + 5));
  }, [list, indexItems, currentPage]);
  return (
    <div>
      <h1 className="m-3">Favorites</h1>
      <div className="d-flex justify-content-center mt-3">
        <Pagination
          currentPage={currentPage}
          total={list?.length}
          limit={5}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
      <div className="d-flex justify-content-around flex-wrap gap-5 m-5">
        {toDisplay.map((id, index) => {
          return <Favorite key={index} id={id} />;
        })}
      </div>
      <div className="d-flex justify-content-center mt-3">
        <Pagination
          currentPage={currentPage}
          total={list?.length}
          limit={5}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default Favorites;
