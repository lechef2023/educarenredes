import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function MiNavbar() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#184C78', minHeight: '50px' }}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <Navbar bg="#023D9F" variant="dark" expand="lg">
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Button className="btn btn-secondary rounded-pill mb-2" style={{ marginRight: '10px' }} onClick={() => navigate('/')}>Home</Button>
            <Button className="btn btn-secondary rounded-pill mb-2" style={{ marginRight: '10px' }} onClick={() => navigate('/ConceptosBasicos')}>Conceptos Básicos</Button>
            <Button className="btn btn-secondary rounded-pill mb-2" style={{ marginRight: '10px' }} onClick={() => navigate('/IntroduccionaRedes')}>Introducción a Redes</Button>
            <Button className="btn btn-secondary rounded-pill mb-2" style={{ marginRight: '10px' }} onClick={() => navigate('/Funcionamiento')}>Funcionamiento</Button>
            <Button className="btn btn-secondary rounded-pill mb-2" style={{ marginRight: '10px' }} onClick={() => navigate('/Estructura')}>Estructura</Button>
            <Button className="btn btn-secondary rounded-pill mb-2" style={{ marginRight: '10px' }} onClick={() => navigate('/Recursos')}>Recursos</Button>
            <Button className="btn btn-secondary rounded-pill mb-2" style={{ marginRight: '10px' }} onClick={() => navigate('/Bibliografia')}>Bibliografía</Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default MiNavbar;

