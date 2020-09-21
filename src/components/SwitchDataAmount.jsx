import React from 'react';
import { Button } from 'react-bootstrap';

const SwitchDataAmount = ({ showUsers }) => {
  return (
    <div>
      <Button variant="dark" onClick={() => showUsers(5)}>
        32 Repos
      </Button>
      <Button variant="dark" onClick={() => showUsers(60)}>
        1000 Repos
      </Button>
    </div>
  );
};
export default SwitchDataAmount;
