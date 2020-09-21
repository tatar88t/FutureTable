import React from 'react';

const TableRow = ({ showInfo, row }) => {
  return (
    <>
      <tr data-id={row.id} data-lastname={row.lastName} onClick={(e) => showInfo(e)}>
        <td>{row && row.id}</td>
        <td>{row && row.firstName}</td>
        <td>{row && row.lastName}</td>
        <td>{row && row.email}</td>
        <td>{row && row.phone}</td>
      </tr>
    </>
  );
};
export default TableRow;
