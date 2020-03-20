import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../hoc/Aux';
import Tag from '../../Components/Tag/Tag';

class Tags extends Component {
  state = {
    tags: []
  };

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/tags/')
      .then(res => {
        this.setState({ tags: res.data });
      });
  }

  render() {
    return (
      <Aux>
        {this.state.tags.map(tag => {
          return (
            <Tag 
              name={tag.name}
              slug={tag.slug}
            />);
        })}
      </Aux>
    );
  }
}

export default Tags;