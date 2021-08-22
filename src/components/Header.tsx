import React from 'react';
import { FunctionComponent } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Header: FunctionComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">Epic home page</Navbar.Brand>
      <Nav.Link as={Link} to ="/map">Map</Nav.Link>
      <Nav.Link as={Link} to="/timeline">Timeline</Nav.Link>
      <Nav.Link>Multi app page</Nav.Link>
    </Navbar>
  );
};
