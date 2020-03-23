import React, { Component } from 'react';
import Post from '../../Components/Post/Post';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

const getPosts = props => {
  if (props.loading) {
    return (
      <Jumbotron fluid style={{ backgroundColor: "#fff" }}>
        <Container className="text-center">
          <Spinner animation="grow" />
          <p>Loading</p>
        </Container>
      </Jumbotron>
    );
  } else if (props.error) {
    return (
      <Jumbotron fluid style={{ backgroundColor: "#fff" }}>
        <Container className="text-center">
          <h1 className="font-weight-light">Error Loading Posts</h1>
          <br />
          <p>There was an error reaching out to the API. Try refereshing the page.</p>
        </Container>
      </Jumbotron>
    );
  } else {
    return (
      <Row>
        {props.posts.map(post => {
          return (
            <Col sm={6} className="mb-3">
              <Post
                title={post.title}
                image={post.image}
                summary={post.summary}
                published={post.published}
                id={post.id}
                slug={post.slug}
                key={post.id + "_" + post.slug}
              />
            </Col>
          )
        })}
      </Row>
    );
  }
};

const posts = props => {
  return getPosts(props);
};

export default posts;