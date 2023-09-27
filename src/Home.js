import React from 'react';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Card>
        <Card.Body>
          <Card.Title>Contenido de la tarjeta</Card.Title>
          <Card.Text>
            Este es el contenido de la tarjeta vinculada a la página de inicio.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
