import classNames from "classnames";

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
  const pages = range(0, pagesCount);
  if (pagesCount > 1) {
    return (
      <ul className="pagination pagination-lg">
        {pages.map((page) => (
          <PaginationItem
            page={page}
            key={page}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        ))}
      </ul>
    );
  }
};
export default Pagination;
