import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Posts from './Containers/Posts/Posts';
import Sidebar from './Containers/Sidebar/Sidebar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Pagination from './Components/Pagination/Pagination';

class App extends Component {
  state = {
    pageSize: 9,
    currentPage: 1,
    count: 0,
    next: null,
    prev: null,
    posts: [],
    error: false,
    loading: true,
    apiURI: "http://127.0.0.1:8000/api/posts/?order_by=published",
  }

  fetchPosts = (pageSize, page) => {
    this.setState({ loading: true });

    axios.get(`${this.state.apiURI}&pagination=True&page_size=${pageSize}&page=${page}`)
      .then(res => this.setState(
        {
          posts: res.data.results,
          currentPage: page,
          count: res.data.count,
          next: res.data.next,
          prev: res.data.previous,
          loading: false
        }
      ))
      .catch(() => this.setState(
        {
          error: true,
          loading: false
        }
      ));
  };

  componentDidMount() {
    this.fetchPosts(this.state.pageSize, this.state.currentPage);
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Container className="mt-3">
          <Row>
            <Col lg={8}>
              <Posts
                loading={this.state.loading}
                error={this.state.error}
                posts={this.state.posts}
              />

              <div style={{ maxWidth: "100%", margin: "0 auto" }}>
                <Pagination
                  pageSize={this.state.pageSize}
                  currentPage={this.state.currentPage}
                  count={this.state.count}
                  next={this.state.next}
                  prev={this.state.prev}
                  fetchPosts={this.fetchPosts}
                  maxPages={Math.ceil(this.state.count/this.state.pageSize)}
                />
              </div>
            </Col>

            <Sidebar />
          </Row>
        </Container>

        <footer className="mt-5 mb-3">
          <p className="text-center text-muted small">&copy; Copyright {new Date().getFullYear()}. All rights reserved.</p>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
