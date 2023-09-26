import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Mi Página Web</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/conceptos">Conceptos Básicos</Nav.Link>
        <Nav.Link href="/redes">Introducción a Redes</Nav.Link>
        {/* Agrega enlaces para los otros elementos del menú */}
      </Nav>
    </Navbar>
  );
}

export default Navigation;
