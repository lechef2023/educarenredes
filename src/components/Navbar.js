import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

function MiNavbar() {
  const navigate = useNavigate(); // Declara navigate

  return (
    <div style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
      <Navbar bg="#023D9F" variant="dark" expand="lg">
        <Navbar.Collapse id="navbar-nav">
          <Button className="custom-btn" onClick={() => navigate('/')}>Home</Button> 
          <Button className="custom-btn" onClick={() => navigate('/ConceptosBasicos')}>Conceptos Básicos</Button>
          <Button className="custom-btn" onClick={() => navigate('/IntroduccionaRedes')}>Introducción a Redes</Button>
          <Button className="custom-btn" onClick={() => navigate('/Funcionamiento')}>Funcionamiento</Button>
          <Button className="custom-btn" onClick={() => navigate('/Estructura')}>Estructura</Button>
          <Button className="custom-btn" onClick={() => navigate('/Recursos')}>Recursos</Button>
          <Button className="custom-btn" onClick={() => navigate('/Bibliografia')}>Bibliografía</Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MiNavbar;


