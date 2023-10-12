import React from 'react';
import { Accordion } from 'react-bootstrap';
import Footer from './Footer';

function Recursos() {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Presentación Interactiva</Accordion.Header>
          <Accordion.Body style={{ background: '#CCF4F9' }}>
            <div className="card">
              <div className="card-header text-center">
                <h5 className="card-title">Presentación Interactiva</h5>
              </div>
              <div className="card-body">
                <div className="card-content text-center">
                  <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px', marginTop: '20px' }}>
                    Para crear la presentación interactiva utilizando la herramienta web Genially donde se abordaron los temas de las Unidades I, II y III con audios explicativos y un quiz final, sigue una estructura cuidadosamente planificada. La presentación comenzó con una diapositiva de resumen que describe brevemente el contenido a tratar. Luego, utiliza elementos visuales para representar conceptos clave y añade audios que detallen los puntos relevantes. Al final de la presentación, se incluye un pequeño quiz interactivo que abarque los conceptos de las tres unidades y proporciona retroalimentación inmediata. Me asegure que el diseño fuese atractivo y coherente, y realice pruebas para garantizar que todos los elementos funcionen correctamente antes de distribuir la presentación a la audiencia deseada. Este enfoque puede garantizar una experiencia de aprendizaje efectiva y comprometida para los participantes interesados en las redes, telemática y el trabajo grupal en entornos educativos.
                  </p>
                  <p className="card-text" style={{ fontSize: '18px', marginTop: '20px' }}>
                    Puedes acceder a la presentación interactiva completa a través de este enlace: <a href="https://view.genial.ly/65246a321c4f460011d221a2/presentation-presentacion-minimal">Ver la presentación</a>.
                  </p>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Conceptos Básicos</Accordion.Header>
          <Accordion.Body style={{ background: '#CCF4F9' }}>
            <div className="card">
              <div className="card-header text-center">
                <h5 className="card-title">Conceptos Básicos</h5>
              </div>
              <div className="card-body">
                <div className="card-content text-center">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/Qzj7RiET5NE"
                      title="Video de Conceptos Básicos"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Introducción a Redes</Accordion.Header>
          <Accordion.Body style={{ background: '#CCF4F9' }}>
            <div className="card">
              <div className="card-header text-center">
                <h5 className="card-title">Introducción a Redes</h5>
              </div>
              <div className="card-body">
                <div className="card-content text-center">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/uunnO9yZCYk"
                      title="Video de Introducción a Redes"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Funcionamiento</Accordion.Header>
          <Accordion.Body style={{ background: '#CCF4F9' }}>
            <div className="card">
              <div className="card-header text-center">
                <h5 className="card-title">Funcionamiento</h5>
              </div>
              <div className="card-body">
                <div className="card-content text-center">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/rw41W8crZ_Y"
                      title="Video de Funcionamiento"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Estructura</Accordion.Header>
          <Accordion.Body style={{ background: '#CCF4F9' }}>
            <div className="card">
              <div className="card-header text-center">
                <h5 className="card-title">Estructura</h5>
              </div>
              <div className="card-body">
                <div className="card-content text-center">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/XbKAkeayZwg"
                      title="Video de Estructura"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Footer />
    </div>
  );
}

export default Recursos;
