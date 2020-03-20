import React, { Component } from 'react';
import Ob from '../../hoc/Ob';
import Post from '../../Components/Post/Post';
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
      <Ob>
        <div className="row">
          {this.state.posts.map(post => {
            return (<Post
              title={post.title}
              summary={post.summary}
              tags={post.tags}
              published={post.published}
            />)
          })}
        </div>
      </Ob>
    );
  }
}

export default Posts;