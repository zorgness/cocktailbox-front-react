import classNames from "classnames";
import React from "react";

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

const Pagination = ({
  currentPage,
  total,
  limit,
  onPageChange,
  dataLength,
}) => {
  const pagesCount = Math.ceil(total / limit);
  const pages = [];
  for (let i = 1; i <= Math.ceil(dataLength / limit); i++) {
    pages.push(i);
  }
  const [maxPageNumberLimit, setmaxPageNumberLimit] = React.useState(3);
  const [minPageNumberLimit, setminPageNumberLimit] = React.useState(0);

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
    pageDecrementBtn = (
      <li className="page-link" onClick={handlePrevbtn}>
        {" "}
        &hellip;{" "}
      </li>
    );
  }

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li className="page-link" onClick={handleNextbtn}>
        {" "}
        &hellip;{" "}
      </li>
    );
  }

  if (pagesCount > 1) {
    return (
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            aria-hidden="true"
            onClick={handlePrevbtn}
            disabled={currentPage === pages[0]}
          >
            &laquo;
          </button>
        </li>
        {pageDecrementBtn}

        {pages.map((page) => {
          if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
            return (
              <PaginationItem
                page={page}
                key={page}
                currentPage={currentPage}
                onPageChange={onPageChange}
              />
            );
          } else {
            return null;
          }
        })}

        {pagesCount > 3 ? (
          <>
            {pageIncrementBtn}
            <li className="page-item">
              <button
                className="page-link"
                aria-hidden="true"
                onClick={handleNextbtn}
                disabled={
                  currentPage === pages[pages.length - 1] ? true : false
                }
              >
                &raquo;
              </button>
            </li>
          </>
        ) : null}
      </ul>
    );
  }
};
export default Pagination;
