import React from 'react';
import Card from 'react-bootstrap/Card';

const getRandomHexColor = value => ("#" + Math.floor(Math.random() * value).toString(16));

const getImage = image => {
  if (image === null) {
    return (
      <svg
        className="bd-placeholder-img card-img-top"
        width="100%"
        height="100%"
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
      <div style={{ maxHeight: "150px", overflow: "hidden" }}>
        {getImage(props.image)}
      </div>

      <Card.Body>
        <Card.Title>
          {props.title}
        </Card.Title>
        <Card.Text>
          <p style={{ fontSize: "14px" }}>{props.summary}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
};

export default post;