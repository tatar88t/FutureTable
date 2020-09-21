import React, { useState } from 'react';
import TableHead from './TableHead';
import TableRow from './TableRow';
const TablePage = ({ sheetData, setSheetData, showInfo, rowsPortion }) => {
  let leftPortionPageNum = (rowsPortion - 1) * 50 + 1;
  let rightPortionPageNum = rowsPortion * 50;

  const [sorted, setSorted] = useState(false);

  const sortColumn = (col) => {
    let isSorted = sorted;
    let direction = isSorted ? -1 : 1;
    setSheetData(
      sheetData.sort((a, b) => {
        if (a[col] === b[col]) {
          return 0;
        }
        return a[col] > b[col] ? direction : direction * -1;
      }),
    );
    setSorted(!sorted);
  };

  return (
    <>
      <TableHead sortColumn={sortColumn} />
      <tbody>
        {sheetData
          .filter(
            (row, index) =>
              (index === 0 || index >= leftPortionPageNum) && index <= rightPortionPageNum,
          )
          .map((row, index) => {
            return <TableRow showInfo={showInfo} row={row} key={+row.id + row.lastName} />;
          })}
      </tbody>
    </>
  );
};
export default TablePage;
