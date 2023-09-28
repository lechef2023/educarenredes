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
          <p>Barabási, A.-L. (2003). Linked: How everything is connected to everything else and what it means for business, science, and everyday life. New York: Plume.</p>
          <p>Berners-Lee, T. (1996). The World Wide Web: A new medium for information retrieval. Communications of the ACM, 39(8), 76-82.</p>
          <p>Fernández-Navajas, J. (2017). Telemática y redes de comunicaciones. Ediciones Alfaomega.</p>
          <p>Shneiderman, B. (2016). Designing the user interface: Strategies for effective human-computer interaction. Pearson.</p>
          <p>Stallings, W. (2013). Data and computer communications (10th ed.). Upper Saddle River, NJ: Pearson Education.</p>
          <p>Tanenbaum, A. S., & Wetherall, D. J. (2011). Computer networks (5th ed.). Upper Saddle River, NJ: Pearson Education.</p>
          <p>World Wide Web Consortium (W3C). (2023). World Wide Web. Recuperado de https://www.w3.org/</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Bibliografia;