import React from 'react';

const tag = (props) => {
  return (
    <button type="button" className="btn btn-sm btn-light mr-1 mb-1">{props.name}</button>
  );
};

export default tag;