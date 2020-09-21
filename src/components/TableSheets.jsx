import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import Pagination from './Pagination';
import TablePage from './TablePage';

const TableSheets = ({
  setSheetData,
  sheetData,
  rowsPortion,
  page,
  setPage,
  setRowsPortion,
  setMemberInfo,
  rowValue,
}) => {
  const showInfo = (e) => {
    const member = sheetData.filter(
      (row) => Object.values(row)[0] === +e.target.parentElement.getAttribute('data-id'),
    );

    setMemberInfo(member);
  };

  const totalCount = rowValue;
  let pagesCountShow = [];

  let totalPages = Math.ceil(totalCount / 50);
  for (let i = 1; i <= totalPages; i++) {
    pagesCountShow.push(i);
  }

  let sheetsToShow = [];

  const onPageChange = (page) => {
    setPage(page);
    setRowsPortion(page);
  };

  return (
    <div>
      <div style={{ height: '65vh', overflowY: 'scroll' }}>
        <Table striped bordered hover size="sm">
          <TablePage
            setSheetData={setSheetData}
            sheetData={sheetData}
            showInfo={showInfo}
            rowsPortion={rowsPortion}
          />
        </Table>
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        pagesCountShow={pagesCountShow}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};
export default TableSheets;
