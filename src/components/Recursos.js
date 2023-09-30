import React from 'react';
import { Accordion } from 'react-bootstrap';
import Footer from './Footer';

function Recursos() {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
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
        <Accordion.Item eventKey="1">
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
        <Accordion.Item eventKey="2">
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
        <Accordion.Item eventKey="3">
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
