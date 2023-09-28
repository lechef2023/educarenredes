import React from 'react';
import { Accordion } from 'react-bootstrap';
import introduccion_a_redes_redes_informaticas from './images/introduccion_a_redes_redes_informaticas.jpg';
import introduccion_a_redes_tipos_de_redes from './images/introduccion_a_redes_tipos_de_redes.jpg';
import introduccion_a_redes_protocolos from './images/introduccion_a_redes_protocolos.jpg';


function ConceptosBasicos() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Redes Informáticas</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">Redes Informáticas</h5>
            </div>
            <div className="card-body">
              <div className="card-content">
                <img
                  src={introduccion_a_redes_redes_informaticas}
                  alt="Imagen"
                  className="card-img-left"
                  style={{ width: '20%' }}
                />
                <p className="card-text">
                  Una red informática es un conjunto de dispositivos conectados entre sí que comparten información y recursos. Estos dispositivos pueden ser computadoras, impresoras, escáneres, o cualquier otro dispositivo electrónico que pueda conectarse a una red.
                </p>
                <p className="card-text">
                  Tanenbaum y Wetherall (2011) definen las redes informáticas como "sistemas de interconexión de equipos informáticos que permiten el intercambio de información y recursos".
                </p>
                <p className="card-text">
                  Es importante señalar que no existe una definición única de redes informáticas. El concepto ha sido definido de diversas maneras por diferentes autores, dependiendo del contexto en el que se utilice. Sin embargo, todas las definiciones comparten la idea de que las redes informáticas son sistemas de dispositivos que se conectan entre sí para compartir información y recursos.
                </p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Tipos de Redes</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">Tipos de Redes</h5>
            </div>
            <div className="card-body">
              <div className="card-content">
                <img
                  src={introduccion_a_redes_tipos_de_redes}
                  alt="Imagen"
                  className="card-img-left"
                  style={{ width: '20%' }}
                />
                <p className="card-text">
                  Las redes informáticas se pueden clasificar según su tamaño, alcance, tecnología y topología.
                </p>
                <p className="card-text">
                  Por tamaño: Se pueden clasificar en redes de área personal (PAN), redes de área local (LAN), redes de área metropolitana (MAN), redes de área amplia (WAN) y redes globales (GAN).
                </p>
                <p className="card-text">
                  Por alcance: Se pueden clasificar en redes privadas, redes públicas y redes híbridas.
                </p>
                <p className="card-text">
                  Por tecnología: Se pueden clasificar en redes cableadas, redes inalámbricas y redes mixtas.
                </p>
                <p className="card-text">
                  Por topología: Se pueden clasificar en redes estrella, redes anillo, redes malla y redes híbridas.
                </p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Protocolos</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">Protocolos</h5>
            </div>
            <div className="card-body">
              <div className="card-content">
                <img
                  src={introduccion_a_redes_protocolos}
                  alt="Imagen"
                  className="card-img-left"
                  style={{ width: '20%' }}
                />
                <p className="card-text">
                  Los protocolos de redes son conjuntos de reglas que rigen la comunicación entre los dispositivos en una red. Estos protocolos definen cómo se formatean los datos, cómo se envían y cómo se reciben.
                </p>
                <p className="card-text">
                  Los protocolos de redes son esenciales para el funcionamiento de las redes informáticas. Sin ellos, sería imposible que los dispositivos se comunicaran entre sí y que los usuarios pudieran acceder a los servicios y recursos que ofrece la red.
                </p>
                <p className="card-text">
                  Algunos ejemplos de protocolos de redes son:
                </p>
                <p className="card-text">
                  Protocolo de Internet (IP): es el protocolo de nivel de red que se utiliza en Internet.
                </p>
                <p className="card-text">
                  Protocolo de control de transmisión (TCP): es el protocolo de nivel de transporte que se utiliza para garantizar la entrega de los datos.
                </p>
                <p className="card-text">
                  Protocolo de transferencia de hipertexto (HTTP): es el protocolo de nivel de aplicación que se utiliza para transmitir páginas web.
                </p>
                <p className="card-text">
                  Protocolo simple de transferencia de correo electrónico (SMTP): es el protocolo de nivel de aplicación que se utiliza para enviar correo electrónico.
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