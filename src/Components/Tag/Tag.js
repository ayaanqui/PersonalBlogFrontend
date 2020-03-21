import React from 'react';
import Button from 'react-bootstrap/Button';

const tag = (props) => {
  return (
    <Button
      variant="light"
      size="sm"
      className="mr-1 mb-1"
    >
      {props.name}
    </Button>
  );
};

export default tag;