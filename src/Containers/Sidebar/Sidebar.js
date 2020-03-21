import React from 'react';
import Tags from '../Tags/Tags';
import Col from  'react-bootstrap/Col';

const sidebar = (props) => {
  return (
    <Col lg={4}>
      <h4 className="font-weight-light mb-4">Tags</h4>
      <Tags />
    </Col>
  );
};

export default sidebar;