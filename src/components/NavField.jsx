import React, { useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';

const Navfield = ({ searchMatches, resetFilter, openAddUserForm }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    searchMatches(query);
  };
  return (
    <div style={{ display: 'flex' }}>
      <form style={{ display: 'flex' }} onSubmit={(e) => onSubmit(e)} onReset={resetFilter}>
        <FormControl placeholder="Поиск..." type="text" onChange={handleChange} />
        <Button type="submit" variant="primary">
          Найти
        </Button>
        <Button style={{ width: '100%' }} variant="primary" type="reset">
          Сбросить фильтр
        </Button>
      </form>
      <Button variant="primary" onClick={openAddUserForm}>
        Добавить
      </Button>
    </div>
  );
};
export default Navfield;
