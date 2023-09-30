import React from 'react';
import Card from 'react-bootstrap/Card';
import imagen_perfil from './images/imagen_perfil.png';
import Footer from '../src/components/Footer';

function Home() {
  return (
    <div className="main-container">
      <div className="card-container">
        <div
          className="image-container"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={imagen_perfil}
            alt="Imagen"
            style={{
              width: '20%',
              borderRadius: '50%',
              marginTop: '40px',
            }}
          />
        </div>
        <div className="card-text-container" style={{ marginTop: '-40px' }}>
          <Card style={{ transform: 'scale(0.75)' }}>
            <Card.Body>
              <Card.Title style={{ textAlign: 'justify', fontSize: '28px' }}><strong>Biografía</strong></Card.Title>
              <Card.Text>
                <p style={{ textAlign: 'justify', fontSize: '20px' }}><strong>Nacimiento y Origen</strong></p>
                <p style={{ textAlign: 'justify', fontSize: '20px' }}>Lenyn Conde, nacido el 19 de noviembre de 1990 en la vibrante ciudad de Valencia, Venezuela, es un individuo multifacético que ha dedicado su vida a la educación, la tecnología y el bienestar físico.</p>
                <p style={{ textAlign: 'justify', fontSize: '20px' }}><strong>Educación y Carrera Profesional</strong></p>
                <p style={{ textAlign: 'justify', fontSize: '20px' }}>Lenyn Conde se graduó como Licenciado en Educación con mención en Matemáticas en la Universidad de Carabobo, destacándose como un apasionado educador desde el principio de su carrera.</p>
                <p style={{ textAlign: 'justify', fontSize: '20px' }}>Además de su pasión por la educación, Lenyn es un cocinero profesional egresado de la Escuela Culinaria Le Gourmet's.</p>
                <p style={{ textAlign: 'justify', fontSize: '20px' }}>Actualmente, Lenyn Conde está cursando una especialización en Telemática e Informática en la Educación a Distancia en la Universidad Nacional Abierta. Este camino académico refleja su compromiso constante con la mejora de la educación a través de la tecnología.</p>
                <p style={{ textAlign: 'justify', fontSize: '20px' }}>Sumado a sus logros académicos y culinarios, Lenyn es un amante apasionado de la calistenia, una disciplina de entrenamiento que utiliza el peso corporal para desarrollar la fuerza y la agilidad. Su dedicación a la calistenia refleja su compromiso con el bienestar físico y la salud.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;




