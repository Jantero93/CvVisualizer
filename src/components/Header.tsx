/** React, Router */
import React from 'react';
import { Link } from 'react-router-dom';

/** Css, UI */
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

const Header: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
        Epic home page
      </Navbar.Brand>
      <Nav.Link as={Link} to="/map">
        Map
      </Nav.Link>
      <Nav.Link as={Link} to="/timeline">
        Timeline
      </Nav.Link>
      <Nav.Link>Multi app page</Nav.Link>
    </Navbar>
  );
};

export default Header;
