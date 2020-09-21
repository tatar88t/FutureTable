import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import Navfield from './NavField';
import TablePage from './TablePage';
import Pagination from './Pagination';
import InfoBlock from './InfoBlock';
import TableSheets from './TableSheets';

const Sheet = ({
  initData,
  setSheetData,
  sheetData,
  rowsPortion,
  openAddUserForm,
  page,
  setPage,
  setRowsPortion,
  rowValue,
}) => {
  const [memberInfo, setMemberInfo] = useState([]);

  const searchMatches = (query) => {
    let optimizedData = [];

    sheetData.forEach((row) => {
      let newRow = Object.assign({}, row);
      optimizedData.push(newRow);
    });
    optimizedData.map((elem) => {
      Object.keys(elem).map((item) => {
        elem[item] = elem[item].toString().toLowerCase();
      });
    });
    const request = query.toLowerCase();
    const searchResult = optimizedData.filter((row) => {
      let newRow;
      Object.values(row).filter((item) => {
        if (item.indexOf(request) >= 0) {
          console.log(row, 'ROW');
          newRow = row;
          return row;
        } else return null;
      });
      return newRow;
    });
    searchResult.map((elem) => {
      Object.keys(elem).map((item) => {
        elem[item] = elem[item].charAt(0).toUpperCase() + elem[item].slice(1);
      });
    });
    setSheetData(searchResult);
    setMemberInfo([]);
  };

  const resetFilter = () => {
    setSheetData(initData);
  };

  return (
    <div>
      <Navfield
        searchMatches={searchMatches}
        resetFilter={resetFilter}
        openAddUserForm={openAddUserForm}
      />
      <TableSheets
        setMemberInfo={setMemberInfo}
        setSheetData={setSheetData}
        sheetData={sheetData}
        rowsPortion={rowsPortion}
        page={page}
        setPage={setPage}
        setRowsPortion={setRowsPortion}
        rowValue={rowValue}
      />

      {memberInfo && <InfoBlock memberInfo={memberInfo} />}
    </div>
  );
};
export default Sheet;
