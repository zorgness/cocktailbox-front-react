import classNames from "classnames";
import React from "react";

const range = (start, end) => {
  return [...Array(end).keys()].map((el) => el + start);
};

const PaginationItem = ({ page, currentPage, onPageChange }) => {
  const liClasses = classNames({
    "page-item": true,
    active: page === currentPage,
  });
  return (
    <li className={liClasses} onClick={() => onPageChange(page)}>
      <span className="page-link">{page}</span>
    </li>
  );
};

const Pagination = ({ currentPage, total, limit, onPageChange }) => {
  const pagesCount = Math.ceil(total / limit);
  const [indexPagination, setIndexPagination] = React.useState(0);
  const paginationToDisplay = Math.ceil(pagesCount / (pagesCount / 3));
  const pages = range(indexPagination, paginationToDisplay);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = React.useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = React.useState(0);

  console.log(pagesCount);

  const handlePrevbtn = () => {
    onPageChange(currentPage - 1);

    if ((currentPage - 1) % limit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - limit);
      setminPageNumberLimit(minPageNumberLimit - limit);
    }
  };

  const handleNextbtn = () => {
    onPageChange(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + limit);
      setminPageNumberLimit(minPageNumberLimit + limit);
    }
  };

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  if (pagesCount > 1) {
    return (
      <ul className="pagination pagination-lg">
        {pagesCount > 3 ? (
          <li className="page-item">
            <span
              className="page-link"
              aria-hidden="true"
              onClick={handlePrevbtn}
              disabled={currentPage === pages[0] ? true : false}
            >
              &laquo;
            </span>
          </li>
        ) : null}

        {pages.map((page) => (
          <PaginationItem
            page={page}
            key={page}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        ))}

        {pagesCount > 3 ? (
          <li className="page-item">
            <span
              className="page-link"
              aria-hidden="true"
              onClick={handleNextbtn}
              disabled={currentPage === pages[pages.length - 1] ? true : false}
            >
              &raquo;
            </span>
          </li>
        ) : null}
      </ul>
    );
  }
};
export default Pagination;
