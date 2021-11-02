/** React, Router */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/** Css, UI */
import { BoxArrowInRight } from 'react-bootstrap-icons';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

/** Components */
import LoginModal from './modals/LoginModal';

const Header: React.FC = () => {
  const [iconColor, setIconColor] = useState<string>('white');
  const [showLogin, setShowLogin] = useState<boolean>(false);

  return (
    <>
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
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <BoxArrowInRight
              color={iconColor}
              onClick={() => setShowLogin(!showLogin)}
              onMouseOut={() => setIconColor('white')}
              onMouseOver={() => setIconColor('red')}
              size={36}
            />
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      {showLogin && <LoginModal />}
    </>
  );
};

export default Header;
