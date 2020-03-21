import React, { Component } from 'react';
import Post from '../../Components/Post/Post';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

class Posts extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/posts/?order_by=published&limit=9&page=1')
      .then(res => {
        const data = res.data
        this.setState({ posts: data });
      });
  }

  render() {
    return (
      <Row>
        {this.state.posts.map(post => {
          return (
            <Col sm={6} className="mb-3">
              <Post
                title={post.title}
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
}

export default Posts;