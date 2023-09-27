import React from 'react';
import Card from 'react-bootstrap/Card';

function Bibliografia() {
  return (
    <div>
      <h1>Bibliografía</h1>
      <Card>
        <Card.Body>
          <Card.Title>Bibliografía</Card.Title>
          <Card.Text>
          <p>Fernández-Navajas, J. (2017). Telemática y redes de comunicaciones. Ediciones Alfaomega.</p>
          <p>Shneiderman, B. (2016). Designing the user interface: Strategies for effective human-computer interaction. Pearson.</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Bibliografia;