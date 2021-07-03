import React from 'react';
import { FunctionComponent } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';

import '../styles/Header.css'

export const Header: FunctionComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Jani's CV</Navbar.Brand>
      <Nav.Link>Old fashion CV</Nav.Link>
      <Nav.Link>Previous jobs on map</Nav.Link>
      <Nav.Link>Timeline</Nav.Link>
      <Nav.Link>Everything on same time!</Nav.Link>
    </Navbar>
  );
};
