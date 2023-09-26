import React from 'react';
import { Card } from 'react-bootstrap';

function CardComponent({ title, images, textOnLeft }) {
  return (
    <Card>
      <Card.Body>
        <div className={`d-flex ${textOnLeft ? '' : 'flex-row-reverse'}`}>
          <div className="w-25">
            <Card.Img src={images[0]} />
          </div>
          <div className="flex-grow-1">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{/* Agrega tu texto aquí */}</Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
