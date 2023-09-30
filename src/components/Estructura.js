import React from 'react';
import { Accordion } from 'react-bootstrap';
import estructura_hardware from '../images/estructura_hardware.jpg';
import estructura_software from '../images/estructura_software.jpg';
import estructura_conexiones_usadas from '../images/estructura_conexiones_usadas.jpg';
import estructura_routers from '../images/estructura_routers.jpg';
import estructura_firewall from '../images/estructura_firewall.jpg';
import funcionamiento_formato_direcciones_web from '../images/funcionamiento_formato_direcciones_web.jpg';
import funcionamiento_formato_direcciones_correo from '../images/funcionamiento_formato_direcciones_correo.jpg';
import Footer from './Footer';

function Funcionamiento() {
  return (
    <div>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Hardware</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">Hardware</h5>
            </div>
            <div className="card-body">
              <div className="card-content text-center">
                <img
                  src={estructura_hardware}
                  alt="Imagen"
                  style={{ width: '30%', margin: '0 auto' }}
                />
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px', marginTop: '20px' }}>
                  Gómez y López (2021) definen al hardware como "el conjunto de componentes físicos que componen un sistema informático, los cuales se encargan de realizar las operaciones necesarias para que el sistema funcione".
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px', marginTop: '20px' }}>
                  El hardware es el conjunto de componentes físicos que componen un sistema informático. Estos componentes se pueden clasificar en los siguientes tipos:
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px', marginTop: '20px' }}>
                  Hardware de procesamiento: Es el responsable de ejecutar las instrucciones de un programa. El componente principal del hardware de procesamiento es la unidad central de procesamiento (CPU), que es el cerebro de la computadora. La CPU está formada por millones de transistores que realizan operaciones matemáticas y lógicas.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px', marginTop: '20px' }}>
                  Hardware de almacenamiento: Almacena datos y programas. El componente principal del hardware de almacenamiento es el disco duro, que es un dispositivo de almacenamiento masivo que almacena datos de forma permanente. Otros dispositivos de almacenamiento incluyen la memoria USB, la tarjeta SD y el disco óptico.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px', marginTop: '20px' }}>
                  Hardware de entrada: Permite al usuario introducir datos en un sistema informático. Los componentes principales del hardware de entrada son el teclado, el ratón, el escaner y la cámara web.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px', marginTop: '20px' }}>
                  Hardware de salida: Permite al sistema informático mostrar datos al usuario. Los componentes principales del hardware de salida son el monitor, la impresora y los auriculares.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px', marginTop: '20px' }}>
                  Hardware de comunicación: Permite a los sistemas informáticos conectarse entre sí. Los componentes principales del hardware de comunicación son la tarjeta de red y el módem.
                </p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Software</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">Software</h5>
            </div>
            <div className="card-body">
              <div className="card-content text-center">
                <img
                  src={estructura_software}
                  alt="Imagen"
                  style={{ width: '30%', margin: '0 auto' }}
                />
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px', marginTop: '20px' }}>
                  Cázares (2018) define al software como "el conjunto de instrucciones y datos que controlan el funcionamiento de un ordenador".
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  El software se puede clasificar en los siguientes tipos:
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Software de sistema: Es el software que controla el funcionamiento básico de un ordenador. Incluye el sistema operativo, los controladores de dispositivos y las utilidades.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Software de aplicación: Es el software que permite a los usuarios realizar tareas específicas. Incluye los procesadores de texto, las hojas de cálculo, las bases de datos, los navegadores web y los juegos.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  El software de sistema es necesario para que un ordenador funcione. El software de aplicación permite a los usuarios realizar tareas específicas.
                </p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Conexiones Usadas en las Arquitecturas de Red para Internet</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">Conexiones Usadas en las Arquitecturas de Red para Internet</h5>
            </div>
            <div className="card-body">
              <div className="card-content text-center">
                <img
                  src={estructura_conexiones_usadas}
                  alt="Imagen"
                  className="card-img-left"
                  style={{ width: '30%', margin: '0 auto' }}
                />
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px', marginTop: '20px' }}>

                  Las conexiones usadas en las arquitecturas de red para Internet se pueden clasificar en las siguientes categorías:
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Conexiones cableadas: Son conexiones que utilizan cables para transportar datos. Las conexiones cableadas más comunes son:
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Ethernet: Es la conexión cableada más utilizada. Utiliza un cable de par trenzado para transportar datos a una velocidad de hasta 10 Gbps.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Gigabit Ethernet: Es una variante de Ethernet que utiliza un cable de par trenzado para transportar datos a una velocidad de hasta 1 Gbps.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Fibre Channel: Es una conexión cableada que utiliza un cable de fibra óptica para transportar datos a una velocidad de hasta 100 Gbps.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Conexiones inalámbricas: Son conexiones que utilizan ondas electromagnéticas para transportar datos. Las conexiones inalámbricas más comunes son:
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Wi-Fi: Es la conexión inalámbrica más utilizada. Utiliza ondas de radio para transportar datos a una velocidad de hasta 9,6 Gbps.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Bluetooth: Es una conexión inalámbrica de corto alcance que utiliza ondas de radio para transportar datos a una velocidad de hasta 3 Mbps.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  LTE: Es una conexión inalámbrica de alta velocidad que utiliza ondas de radio para transportar datos a una velocidad de hasta 1 Gbps.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Conexiones satelitales: Son conexiones que utilizan satélites para transportar datos. Las conexiones satelitales son útiles para conectar zonas remotas o para proporcionar acceso a Internet a dispositivos móviles.
                </p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Routers</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">Routers</h5>
            </div>
            <div className="card-body">
              <div className="card-content text-center">
                <img
                  src={estructura_routers}
                  alt="Imagen"
                  className="card-img-left"
                  style={{ width: '30%', margin: '0 auto' }}
                />
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px', marginTop: '20px' }}>
                  Aguado, García y Sánchez (2018) definen un router como "un dispositivo de red que conecta dos o más redes, decidiendo la ruta más adecuada para enviar los paquetes de datos".
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Los routers realizan las siguientes funciones:
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Conexión de redes: Los routers conectan dos o más redes o subredes.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Enrutamiento: Los routers dirigen el tráfico de red entre las redes conectadas.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Traducción de direcciones de red (NAT): Los routers pueden traducir las direcciones IP públicas de las redes conectadas a direcciones IP privadas, lo que permite que las redes privadas se conecten a Internet.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Seguridad: Los routers pueden proporcionar funciones de seguridad, como el filtrado de paquetes y el cifrado, para proteger las redes conectadas.
                </p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Firewall</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">Firewall</h5>
            </div>
            <div className="card-body">
              <div className="card-content text-center">
                <img
                  src={estructura_firewall}
                  alt="Imagen"
                  className="card-img-left"
                  style={{ width: '30%', margin: '0 auto' }}
                />
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px', marginTop: '20px' }}>
                  Stallings (2013) define un firewall como "un dispositivo o software que controla el tráfico de red entre dos redes".
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Los firewalls realizan las siguientes funciones:
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Filtrado de paquetes: Los firewalls filtran los paquetes de datos que entran y salen de una red. Esto ayuda a proteger la red de ataques externos.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Autenticación: Los firewalls pueden autenticar a los usuarios que intentan acceder a una red. Esto ayuda a proteger la red de accesos no autorizados.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Encriptación: Los firewalls pueden cifrar los datos que se transmiten entre dos redes. Esto ayuda a proteger los datos de la interceptación.
                </p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Formato de las Direcciones Web</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">Formato de las Direcciones Web</h5>
            </div>
            <div className="card-body">
              <div className="card-content text-center">
                <img
                  src={funcionamiento_formato_direcciones_web}
                  alt="Imagen"
                  className="card-img-left"
                  style={{ width: '30%', margin: '0 auto' }}
                />
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px', marginTop: '20px' }}>
                  El formato de las direcciones web, también conocidas como URLs (Uniform Resource Locators), es el siguiente:
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  protocolo://dominio[:puerto]/recurso
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Los componentes de una dirección web son los siguientes:
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Protocolo: Es el protocolo de comunicación que se utilizará para acceder al recurso. Los protocolos más comunes son HTTP (Hypertext Transfer Protocol) y HTTPS (Hypertext Transfer Protocol Secure).
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Dominio: Es el nombre del servidor web que aloja el recurso.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Puerto: Es el número de puerto del servidor web que aloja el recurso. El puerto 80 se utiliza para HTTP y el puerto 443 se utiliza para HTTPS.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Recurso: Es el nombre del archivo o directorio que se desea acceder.
                </p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Formato Típico de Dirección de Correos</Accordion.Header>
        <Accordion.Body style={{ background: '#CCF4F9' }}>
          <div className="card">
            <div className="card-header text-center">
              <h5 className="card-title">Formato Típico de Dirección de Correos</h5>
            </div>
            <div className="card-body">
              <div className="card-content text-center">
                <img
                  src={funcionamiento_formato_direcciones_correo}
                  alt="Imagen"
                  className="card-img-left"
                  style={{ width: '30%', margin: '0 auto' }}
                />
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px', marginTop: '20px' }}>
                  El formato se rige por el sintaxis de la dirección de correo electrónico que se refiere a normas y directrices específicas. Estas reglas garantizan que el formato de la dirección esté correctamente dispuesto y pueda ser reconocido y procesado por los servidores y clientes de correo electrónico.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Desglosemos un ejemplo de sintaxis de una dirección de correo electrónico profesional en el trabajo. Echa un vistazo a esta dirección de correo electrónico:  info@bouncer.com.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  He aquí los elementos básicos:
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Información - la parte local de la dirección de correo electrónico.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  el símbolo "@".
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  el punto.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  Bouncer - el nombre de dominio.
                </p>
                <p className="card-text" style={{ textAlign: 'justify', fontSize: '18px' }}>
                  .com - dominio de nivel superior o TLD.
                </p>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <Footer/>
    </div>
  );
}

export default Funcionamiento;