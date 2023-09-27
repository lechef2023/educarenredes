import React from 'react';
import { Accordion } from 'react-bootstrap';
import conceptos_basicos_telematica from './images/conceptos_basicos_telematica.jpg';
import conceptos_basicos_medios_interactivos from './images/conceptos_basicos_medios_interactivos.jpg';

function ConceptosBasicos() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Telemática</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">Telemática</h5>
            </div>
            <div className="card-body">
              <div className="card-content">
                <img
                  src={conceptos_basicos_telematica}
                  alt="Imagen"
                  className="card-img-left"
                  style={{ width: '20%' }}
                />
                <p className="card-text">
                Fernández-Navajas (2017) describe la telemática como "una disciplina que fusiona la informática y las comunicaciones para crear infraestructuras y sistemas que posibilitan la interconexión y la transmisión de datos a distancia."
                </p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Medios Interactivos</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">Medios Interactivos</h5>
            </div>
            <div className="card-body">
              <div className="card-content">
                <img
                  src={conceptos_basicos_medios_interactivos}
                  alt="Imagen"
                  className="card-img-left"
                  style={{ width: '20%' }}
                />
                <p className="card-text">
                Shneiderman (2016) argumenta que los medios interactivos son "herramientas digitales que permiten a las personas realizar acciones, explorar información y colaborar de manera efectiva a través de la manipulación de datos y la respuesta inmediata".
                </p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ConceptosBasicos;


