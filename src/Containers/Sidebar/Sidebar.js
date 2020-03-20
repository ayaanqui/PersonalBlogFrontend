import React from 'react';
import Tags from '../Tags/Tags';

const sidebar = (props) => {
  return (
    <div className="col-6 col-lg-4">
      <h4 className="font-weight-light">Tags</h4>
      <Tags />
    </div>
  );
};

export default sidebar;