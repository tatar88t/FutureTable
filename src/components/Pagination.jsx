import React from 'react';
import stl from './pagination.module.css';
const Constants = {
  PORTION_SIZE: 10,
  PER_PAGE: 50,
  LIMIT_PAGES: 100,
};
const Pagination = ({ page, setPage, pagesCountShow, totalPages, onPageChange }) => {
  // const {page, setPage, pagesCountShow, totalPages} = useContext(ResultsContext)

  let portionCount = Math.ceil(totalPages / Constants.PORTION_SIZE);
  let [portionNum, setPortionNum] = React.useState(1);
  let leftPortionPageNum = (portionNum - 1) * Constants.PORTION_SIZE + 1;
  let rightPortionPageNum = portionNum * Constants.PORTION_SIZE;

  return (
    <div className={stl.pagination}>
      {portionNum > 1 && (
        <button
          onClick={() => {
            setPortionNum(portionNum - 1);
          }}>
          PREV
        </button>
      )}
      {pagesCountShow
        .filter(
          (p) => p >= leftPortionPageNum && p <= rightPortionPageNum && p <= Constants.LIMIT_PAGES,
        )
        .map((p) => {
          return (
            <span
              onClick={() => {
                // setPage(p);
                onPageChange(p);
              }}
              className={page === p ? stl.activePageNum : stl.pageNum}
              key={p}>
              {p}
            </span>
          );
        })}
      {portionCount > portionNum && portionNum < Constants.LIMIT_PAGES / Constants.PORTION_SIZE && (
        <button
          onClick={() => {
            setPortionNum(portionNum + 1);
          }}>
          NEXT
        </button>
      )}
      <div></div>
    </div>
  );
};
export default Pagination;
