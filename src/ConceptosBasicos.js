import React from 'react';
import { Accordion } from 'react-bootstrap';
import conceptos_basicos_telematica from './images/conceptos_basicos_telematica.jpg';
import conceptos_basicos_medios_interactivos from './images/conceptos_basicos_medios_interactivos.jpg';
import conceptos_basicos_red_telematica from './images/conceptos_basicos_red_telematica.jpg';
import conceptos_basicos_usuario from './images/conceptos_basicos_usuario.jpg';
import conceptos_basicos_grupos_de_interes from './images/conceptos_basicos_grupos_de_interes.jpg';
import conceptos_basicos_redes from './images/conceptos_basicos_redes.jpg';
import conceptos_basicos_internet from './images/conceptos_basicos_internet.jpg';
import conceptos_basicos_protocolos from './images/conceptos_basicos_protocolos.jpg';
import conceptos_basicos_world_wide_web from './images/conceptos_basicos_world_wide_web.jpg';

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
              <div className="card-content text-center">
                <img
                  src={conceptos_basicos_telematica}
                  alt="Imagen"
                  style={{ width: '30%', margin: '0 auto' }}
                />
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
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
              <div className="card-content text-center">
                <img
                  src={conceptos_basicos_medios_interactivos}
                  alt="Imagen"
                  style={{ width: '30%', margin: '0 auto' }}
                />
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Shneiderman (2016) argumenta que los medios interactivos son "herramientas digitales que permiten a las personas realizar acciones, explorar información y colaborar de manera efectiva a través de la manipulación de datos y la respuesta inmediata".
                </p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Red Telemática</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center text-center">
              <h5 className="card-title">Red Telemática</h5>
            </div>
            <div className="card-body">
              <div className="card-content text-center">
                <img
                  src={conceptos_basicos_red_telematica}
                  alt="Imagen"
                  style={{ width: '30%', margin: '0 auto' }}
                />
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Una "red telemática" podría entenderse como una infraestructura de comunicaciones que combina tecnologías de telecomunicaciones e informática para permitir la transmisión, procesamiento y gestión de información a distancia, generalmente a través de redes de datos.
                </p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Usuario</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">Usuario</h5>
            </div>
            <div className="card-body">
              <div className="card-content text-center">
                <img
                  src={conceptos_basicos_usuario}
                  alt="Imagen"
                  style={{ width: '30%', margin: '0 auto' }}
                />
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Un usuario es cualquier persona o entidad que interactúa con algún tipo de sistema o tecnología, y su experiencia y satisfacción son aspectos cruciales a considerar en el diseño y la implementación de sistemas y productos.
                </p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Grupos de Interés</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">Grupos de Interés</h5>
            </div>
            <div className="card-body">
              <div className="card-content text-center">
                <img
                  src={conceptos_basicos_grupos_de_interes}
                  alt="Imagen"
                  style={{ width: '30%', margin: '0 auto' }}
                />
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Grupos de interés telemáticos se refiere a comunidades, redes o colectivos que se forman y operan en el entorno digital, utilizando tecnologías de la información y la comunicación (TIC) para promover sus intereses comunes, intercambiar información, colaborar en línea y participar en actividades relacionadas con un tema específico o una causa compartida. Estos grupos pueden abordar una amplia variedad de temas, desde cuestiones sociales y políticas hasta intereses profesionales y culturales, y utilizan plataformas digitales, como redes sociales, foros en línea, aplicaciones de mensajería y sitios web, para facilitar la comunicación y la interacción entre sus miembros. Los grupos de interés telemáticos desempeñan un papel importante en la sociedad digital actual al permitir la participación activa y la movilización en torno a asuntos de relevancia y preocupación mutua.
                </p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Redes</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">Redes</h5>
            </div>
            <div className="card-body">
              <div className="card-content text-center">
                <img
                  src={conceptos_basicos_redes}
                  alt="Imagen"
                  style={{ width: '30%', margin: '0 auto' }}
                />
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Barabási (2003) define las redes como "sistemas de entidades interconectadas de manera que cada entidad está conectada con un número finito de otras entidades".
                </p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Internet</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">Internet</h5>
            </div>
            <div className="card-body">
              <div className="card-content">
                <img
                  src={conceptos_basicos_internet}
                  alt="Imagen"
                  className="card-img-left"
                  style={{ width: '20%' }}
                />
                <p className="card-text">
                  Tim Berners-Lee (1996) define Internet como "una red mundial de computadoras conectadas entre sí, que permite a los usuarios compartir información y recursos".
                </p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Protocolos</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">Protocolos</h5>
            </div>
            <div className="card-body">
              <div className="card-content">
                <img
                  src={conceptos_basicos_protocolos}
                  alt="Imagen"
                  className="card-img-left"
                  style={{ width: '20%' }}
                />
                <p className="card-text">
                  Stallings (2013) define los protocolos como "conjuntos de reglas que definen cómo se comunican los sistemas informáticos".
                </p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>World Wide Web</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">World Wide Web</h5>
            </div>
            <div className="card-body">
              <div className="card-content">
                <img
                  src={conceptos_basicos_world_wide_web}
                  alt="Imagen"
                  className="card-img-left"
                  style={{ width: '20%' }}
                />
                <p className="card-text">
                  W3C (2023) define la WWW como "un sistema global de documentos de hipertexto interconectados que se pueden acceder a través de Internet"
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


