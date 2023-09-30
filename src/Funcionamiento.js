import React from 'react';
import { Accordion } from 'react-bootstrap';
import funcionamiento_Servicios_interactivos_en_tiempo_real from './images/funcionamiento_Servicios_interactivos_en_tiempo_real.jpg';
import funcionamiento_como_viaja_la_informacion_en_internet from './images/funcionamiento_como_viaja_la_informacion_en_internet.jpg';
import funcionamiento_buscadores from './images/funcionamiento_buscadores.jpg';
import funcionamiento_navegadores from './images/funcionamiento_navegadores.jpg';
import funcionamiento_traductores from './images/funcionamiento_traductores.jpg';
import funcionamiento_foros_electronicos from './images/funcionamiento_foros_electronicos.jpg';
import funcionamiento_telnet from './images/funcionamiento_telnet.jpg';
import funcionamiento_internet_2 from './images/funcionamiento_internet_2.jpg';


function Funcionamiento() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Servicios Interactivos en Tiempo Real</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">Servicios Interactivos en Tiempo Real</h5>
            </div>
            <div className="card-body">
              <div className="card-content text-center">
                <img
                  src={funcionamiento_Servicios_interactivos_en_tiempo_real}
                  alt="Imagen"
                  style={{ width: '30%', margin: '0 auto' }}
                />
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px', marginTop: '20px' }}>
                  Forouzan (2014) define los servicios interactivos en tiempo real como "aquellos servicios que requieren que el sistema responda a las solicitudes del usuario de manera inmediata o casi inmediata".
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Los servicios interactivos en tiempo real se caracterizan por los siguientes aspectos:
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Requisito de respuesta inmediata: El sistema debe responder a las solicitudes del usuario en un período de tiempo determinado, que suele ser muy corto.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Percepción de inmediatez: El usuario debe percibir que el sistema está respondiendo de manera inmediata, incluso si la respuesta real no es instantánea.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Requisito de fiabilidad: El sistema debe ser fiable y no debe fallar con frecuencia.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Los servicios interactivos en tiempo real son cada vez más importantes en la sociedad actual. Estos servicios permiten a las personas interactuar con el mundo de manera más natural y fluida.
                </p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>¿Cómo viaja la información en Internet?</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">¿Cómo viaja la información en Internet?</h5>
            </div>
            <div className="card-body">
              <div className="card-content text-center">
                <img
                  src={funcionamiento_como_viaja_la_informacion_en_internet}
                  alt="Imagen"
                  style={{ width: '30%', margin: '0 auto' }}
                />
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px', marginTop: '20px' }}>
                  La información viaja en Internet en forma de paquetes de datos. Estos paquetes son pequeños fragmentos de información que se envían a través de una red de computadoras.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  El viaje de la información en Internet comienza cuando un usuario solicita un recurso, como una página web o un correo electrónico. La solicitud se envía al servidor que aloja el recurso.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  El servidor divide la solicitud en paquetes de datos. Cada paquete de datos tiene una dirección de destino, que es la dirección IP del dispositivo que solicita el recurso.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Los paquetes de datos se envían a través de la red de computadoras. Los routers son dispositivos que dirigen los paquetes de datos hacia su destino
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Los paquetes de datos pueden viajar a través de diferentes medios, como cables de fibra óptica, cables de cobre o señales inalámbricas.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Cuando los paquetes de datos llegan al dispositivo de destino, se vuelven a ensamblar para formar la solicitud original
                </p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Buscadores</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">Buscadores</h5>
            </div>
            <div className="card-body">
              <div className="card-content text-center">
                <img
                  src={funcionamiento_buscadores}
                  alt="Imagen"
                  className="card-img-left"
                  style={{ width: '30%', margin: '0 auto' }}
                />
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px', marginTop: '20px' }}>
                  Forouzan (2014) define los buscadores como "programas informáticos que permiten a los usuarios encontrar información sobre cualquier tema, de manera rápida y sencilla".
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Los buscadores tienen las siguientes características:
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Utilizan un índice de páginas web: El índice es una base de datos que contiene información sobre las páginas web que existen en Internet.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Permite a los usuarios realizar búsquedas: Los usuarios pueden realizar búsquedas utilizando palabras clave o frases.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Devuelven una lista de resultados: Los resultados de la búsqueda son una lista de páginas web que coinciden con las palabras clave o frases utilizadas.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Los buscadores son herramientas esenciales para navegar por Internet. Permiten a los usuarios encontrar información sobre cualquier tema, de manera rápida y sencilla.
                </p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Navegadores</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">Navegadores</h5>
            </div>
            <div className="card-body">
              <div className="card-content text-center">
                <img
                  src={funcionamiento_navegadores}
                  alt="Imagen"
                  className="card-img-left"
                  style={{ width: '30%', margin: '0 auto' }}
                />
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px', marginTop: '20px' }}>
                  Stallings (2013) define los navegadores como "programas informáticos que permiten a los usuarios acceder a información en Internet".
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Los navegadores son herramientas esenciales para navegar por Internet. Permiten a los usuarios ver las páginas web que se encuentran en Internet, así como interactuar con ellas.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Los navegadores tienen las siguientes características:
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Interpretan el código HTML de las páginas web: El código HTML es el lenguaje que se utiliza para crear páginas web.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Muestran las páginas web en la pantalla del ordenador: Los navegadores utilizan un motor de renderizado para mostrar las páginas web en la pantalla del ordenador.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Permite a los usuarios interactuar con las páginas web: Los navegadores permiten a los usuarios interactuar con las páginas web mediante enlaces, botones y otros elementos
                </p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Traductores</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">Traductores</h5>
            </div>
            <div className="card-body">
              <div className="card-content text-center">
                <img
                  src={funcionamiento_traductores}
                  alt="Imagen"
                  className="card-img-left"
                  style={{ width: '30%', margin: '0 auto' }}
                />
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px', marginTop: '20px' }}>
                  Giménez y García (2018) definen a los traductores en línea como "herramientas que permiten a los usuarios traducir texto de un idioma a otro de forma automática".
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  En general, se puede decir que los traductores en línea son herramientas útiles que pueden ayudar a las personas a traducir textos de un idioma a otro. Sin embargo, es importante tener en cuenta sus limitaciones y utilizarlos con precaución.
                </p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Foros Electrónicos</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">Foros Electrónicos</h5>
            </div>
            <div className="card-body">
              <div className="card-content text-center">
                <img
                  src={funcionamiento_foros_electronicos}
                  alt="Imagen"
                  className="card-img-left"
                  style={{ width: '30%', margin: '0 auto' }}
                />
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px', marginTop: '20px' }}>
                  Garibay (2016) define a los foros electrónicos como "espacios de comunicación en línea que permiten a los usuarios participar en discusiones y compartir información sobre un tema específico".
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Los foros electrónicos tienen las siguientes características:
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Son espacios de comunicación en línea. Los usuarios pueden acceder a ellos desde cualquier lugar con conexión a Internet.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Son espacios de comunicación asincrónica. Los usuarios pueden publicar mensajes en cualquier momento, y otros usuarios pueden responder a ellos más tarde.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Son espacios de comunicación interactiva. Los usuarios pueden participar en discusiones y compartir información.
                </p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Telnet</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">Telnet</h5>
            </div>
            <div className="card-body">
              <div className="card-content text-center">
                <img
                  src={funcionamiento_telnet}
                  alt="Imagen"
                  className="card-img-left"
                  style={{ width: '30%', margin: '0 auto' }}
                />
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px', marginTop: '20px' }}>
                  Butcher (2000) define a Telnet como "un protocolo de red que permite a un usuario conectarse a un ordenador remoto y acceder a sus servicios".
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Telnet tiene las siguientes características:
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Es un protocolo de red. Utiliza el protocolo TCP para establecer una conexión entre el cliente y el servidor.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Es un protocolo de texto. Los datos se transmiten en formato de texto plano.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Es un protocolo no seguro. Los datos transmitidos no están encriptados, lo que los hace vulnerables a la interceptación.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Telnet es una herramienta útil que puede utilizarse para acceder a ordenadores remotos y utilizar sus servicios. Sin embargo, es importante tener en cuenta sus limitaciones, como su falta de seguridad y su compatibilidad limitada.
                </p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Internet 2</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">Internet 2</h5>
            </div>
            <div className="card-body">
              <div className="card-content text-center">
                <img
                  src={funcionamiento_internet_2}
                  alt="Imagen"
                  className="card-img-left"
                  style={{ width: '30%', margin: '0 auto' }}
                />
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px', marginTop: '20px' }}>
                  Forouzan (2014) define a Internet 2 como "una red de alta velocidad que conecta a organizaciones académicas y de investigación con el objetivo de promover la investigación y el desarrollo de nuevas tecnologías de red".
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Internet 2 tiene las siguientes características:
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Es una red de alta velocidad. Los enlaces de Internet 2 suelen tener un ancho de banda de varios gigabits por segundo.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Es una red de investigación y educación. Internet 2 está diseñada para conectar a organizaciones académicas y de investigación.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Ofrece servicios y capacidades de red avanzados. Internet 2 ofrece servicios y capacidades de red que no están disponibles en Internet, como la transmisión de vídeo de alta definición y la colaboración en tiempo real.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Internet 2 es una red que ofrece ancho de banda, rendimiento y servicios mejorados en comparación con Internet. Es una herramienta importante para la investigación, la educación y las comunicaciones empresariales.
                </p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Funcionamiento;