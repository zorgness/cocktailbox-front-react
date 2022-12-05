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
      <span className="page-link">{page + 1}</span>
    </li>
  );
};

const Pagination = ({ currentPage, total, limit, onPageChange }) => {
  const pagesCount = Math.ceil(total / limit);
  const [indexPagination, setIndexPagination] = React.useState(0);
  const paginationCount = Math.ceil(pagesCount / (pagesCount / 3));
  const pages = range(indexPagination, paginationCount);

  console.log(pagesCount);

  const handlePrev = () => {
    if (currentPage > 2) {
      setIndexPagination(indexPagination - 1);
      onPageChange(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < pagesCount - 1) {
      setIndexPagination(indexPagination + 1);
      onPageChange(currentPage + 1);
    }
  };

  if (pagesCount > 1) {
    return (
      <ul className="pagination pagination-lg">
        {pagesCount > 3 ? (
          <li className="page-item">
            <span className="page-link" aria-hidden="true" onClick={handlePrev}>
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
            <span className="page-link" aria-hidden="true" onClick={handleNext}>
              &raquo;
            </span>
          </li>
        ) : null}
      </ul>
    );
  }
};
export default Pagination;
