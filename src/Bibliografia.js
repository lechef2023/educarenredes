import React from 'react';
import Card from 'react-bootstrap/Card';
import Footer from './components/Footer';

function Bibliografia() {
  return (
    <div>
      <div className="card-container">
        <div className="card-text-container" style={{ marginTop: '-40px' }}>
          <Card style={{ transform: 'scale(0.75)' }}>
            <Card.Body>
              <Card.Title style={{ textAlign: 'justify', fontSize: '28px'}}><strong>Bibliografía</strong></Card.Title>
              <Card.Text>
                <p style={{ textAlign: 'justify', fontSize: '20px' }}>Aguado, A., García, J., & Sánchez, S. (2018). Redes de computadores: fundamentos y aplicaciones (4th ed.). Madrid: McGraw-Hill.</p>
                <p style={{ textAlign: 'justify', fontSize: '20px' }}>Barabási, A.-L. (2003). Linked: How everything is connected to everything else and what it means for business, science, and everyday life. New York: Plume.</p>
                <p style={{ textAlign: 'justify', fontSize: '20px' }}>Berners-Lee, T. (1996). The World Wide Web: A new medium for information retrieval. Communications of the ACM, 39(8), 76-82.</p>
                <p style={{ textAlign: 'justify', fontSize: '20px' }}>Cázares, J. (2018). Fundamentos de informática. Madrid: McGraw-Hill.</p>
                <p style={{ textAlign: 'justify', fontSize: '20px' }}>Butcher, J. (2000). Telnet. En J. Butcher (Ed.), Networking technologies (pp. 155-170). London: Routledge.</p>
                <p style={{ textAlign: 'justify', fontSize: '20px' }}>Fernández-Navajas, J. (2017). Telemática y redes de comunicaciones. Ediciones Alfaomega.</p>
                <p style={{ textAlign: 'justify', fontSize: '20px' }}>Forouzan, B. A. (2014). Data communications and networking (7th ed.). Upper Saddle River, NJ: Pearson Education.</p>
                <p style={{ textAlign: 'justify', fontSize: '20px' }}>Garibay, M. T. (2016). Los foros electrónicos como herramienta de aprendizaje. Revista de Educación a Distancia, 20, 1-15.</p>
                <p style={{ textAlign: 'justify', fontSize: '20px' }}>Giménez, M., & García, M. (2018). Uso de traductores en línea por parte de estudiantes universitarios. Revista Española de Lingüística Aplicada, 31(2), 41-61.</p>
                <p style={{ textAlign: 'justify', fontSize: '20px' }}>Gómez, M., & López, J. (2021). Introducción a la informática. Madrid: Paraninfo.</p>
                <p style={{ textAlign: 'justify', fontSize: '20px' }}>Shneiderman, B. (2016). Designing the user interface: Strategies for effective human-computer interaction. Pearson.</p>
                <p style={{ textAlign: 'justify', fontSize: '20px' }}>Stallings, W. (2013). Data and computer communications (10th ed.). Upper Saddle River, NJ: Pearson Education.</p>
                <p style={{ textAlign: 'justify', fontSize: '20px' }}>Tanenbaum, A. S., & Wetherall, D. J. (2011). Computer networks (5th ed.). Upper Saddle River, NJ: Pearson Education.</p>
                <p style={{ textAlign: 'justify', fontSize: '20px' }}>World Wide Web Consortium (W3C). (2023). World Wide Web. Recuperado de https://www.w3.org/</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Bibliografia;