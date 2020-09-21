import React from 'react';
const TableHead = ({ sortColumn }) => {
  return (
    <>
      <thead style={{ color: 'black', fontWeight: '900' }}>
        <tr>
          <th style={{ cursor: 'pointer' }} onClick={() => sortColumn('id')}>
            id
          </th>
          <th style={{ cursor: 'pointer' }} onClick={() => sortColumn('firstName')}>
            firstName
          </th>
          <th style={{ cursor: 'pointer' }} onClick={() => sortColumn('lastName')}>
            lastName
          </th>
          <th style={{ cursor: 'pointer' }} onClick={() => sortColumn('email')}>
            email
          </th>
          <th style={{ cursor: 'pointer' }} onClick={() => sortColumn('phone')}>
            phone
          </th>
        </tr>
      </thead>
    </>
  );
};
export default TableHead;
