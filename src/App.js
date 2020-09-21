import React, { useEffect, useState } from 'react';
import Sheet from './components/Sheet';
import AddUserForm from './components/AddUserForm';
import { Container } from 'react-bootstrap';
import { dataRequest } from './api/apiRequest';
import SwitchDataAmount from './components/SwitchDataAmount';

function App() {
  const [rowValue, setRowValue] = useState(0);
  const [initData, setInitData] = useState([]);
  const [sheetData, setSheetData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPortion, setRowsPortion] = React.useState(1);

  useEffect(() => {
    dataRequest.searchReq(rowValue).then((response) => {
      setInitData([...response.data]);
      setSheetData(response.data);
    });
  }, [rowValue]);

  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const openAddUserForm = () => {
    setShowAddUserForm(true);
  };
  const closeAddUserForm = () => {
    setShowAddUserForm(false);
  };
  const addUser = (user) => {
    sheetData.unshift(user);
    setSheetData([...sheetData]);
    setPage(1);
    setRowsPortion(1);
  };
  const showUsers = (n) => {
    setRowValue(n);
    setPage(1);
    setRowsPortion(1);
  };

  return (
    <div>
      <Container style={{ background: '#f1f2f6' }}>
        <h1 style={{ textAlign: 'center', fontFamily: 'Segoe UI' }}>ТАБЛИЦА ДАННЫХ </h1>

        <div style={{ position: 'relative' }}>
          <SwitchDataAmount showUsers={showUsers} />
          <Sheet
            initData={initData}
            setSheetData={setSheetData}
            sheetData={sheetData}
            rowsPortion={rowsPortion}
            openAddUserForm={openAddUserForm}
            page={page}
            setPage={setPage}
            setRowsPortion={setRowsPortion}
            rowValue={rowValue}
          />
          {showAddUserForm && <AddUserForm closeAddUserForm={closeAddUserForm} addUser={addUser} />}
        </div>
      </Container>
    </div>
  );
}

export default App;
