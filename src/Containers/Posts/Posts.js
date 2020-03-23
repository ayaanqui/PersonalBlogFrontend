import React, { Component } from 'react';
import Post from '../../Components/Post/Post';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';

class Posts extends Component {
  state = {
    count: 0,
    next: null,
    prev: null,
    posts: [],
    error: false,
    loading: true,
  }

  componentDidMount() {
    const pageSize = 9;
    axios.get(`http://127.0.0.1:8000/api/posts/?order_by=published&pagination=True&page_size=${pageSize}`)
      .then(res => this.setState(
        {
          posts: res.data.results,
          count: res.data.count,
          next: res.data.next,
          prev: res.data.previous,
          loading: false
        }
      ))
      .catch(() => this.setState({ error: true, loading: false }))
  }

  getPosts = () => {
    if (this.state.loading) {
      return (
        <Jumbotron fluid style={{ backgroundColor: "#fff" }}>
          <Container className="text-center">
            <Spinner animation="grow" />
            <p>Loading</p>
          </Container>
        </Jumbotron>
      );
    } else if (this.state.error) {
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
          {this.state.posts.map(post => {
            return (
              <Col sm={6} className="mb-3">
                <Post
                  title={post.title}
                  image={post.image}
                  summary={post.summary}
                  tags={post.tags}
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

  render() {
    return (
      this.getPosts()
    );
  }
}

export default Posts;