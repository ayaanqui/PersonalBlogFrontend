import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Posts from './Containers/Posts/Posts';
import Sidebar from './Containers/Sidebar/Sidebar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const app = () => {
  return (
    <React.Fragment>
      <Navbar />
      
      <Container>
        <Row>
          <Col lg={8}>
            <Posts />
          </Col>

          <Sidebar />
        </Row>
      </Container>

      <footer className="mt-5 mb-3">
        <p className="text-center text-muted small">&copy; Copyright { new Date().getFullYear() }. All rights reserved.</p>
      </footer>
    </React.Fragment>
  );
}

export default app;
