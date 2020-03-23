import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const getRandomHexColor = value => ("#" + Math.floor(Math.random() * value).toString(16));

const getImage = image => {
  if (image === null) {
    return (
      <svg
        className="bd-placeholder-img card-img-top"
        width="100%"
        height="100"
        role="img"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill={getRandomHexColor(15777110)} />
      </svg>
    );
  } else {
    return (
      <Card.Img variant="top" src={image} />
    );
  }
};

const post = (props) => {
  return (
    <Card>
      {getImage(props.image)}

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.summary}
        </Card.Text>

        {
          props.tags.map(
            value => <Badge variant="secondary" className="mr-1 font-weight-normal">{value.name}</Badge>
          )
        }
      </Card.Body>
    </Card>
  )
};

export default post;