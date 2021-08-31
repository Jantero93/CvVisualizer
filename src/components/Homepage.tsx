import React from 'react';

import MapComponent from './MapComponent';
import Timeline from './Timeline';

import { Row, Col, Container } from 'react-bootstrap';
import '../styles/Homepage.css';

const containerStyle = {
  height: '75%',
  width: '100%',
  marginLeft: 0,
  marginRight: 0,
  paddingRight: 0,
  paddingLeft: 0
};

const rowStyle = {
  height: '75%',
  width: '100%',
  marginLeft: 0,
  marginRight: 0
};

const colStyle = {
  height: '100%',
  width: '100%',
  marginLeft: 0,
  marginRight: 0,
  paddingRight: 0,
  paddingLeft: 0
};

const Homepage: React.FC = () => {
  return (
    <div className="home-page">
      <Container fluid style={containerStyle}>
        <Row style={rowStyle}>
          <MapComponent />
        </Row>
        <Row style={rowStyle}>
          <Col style={colStyle}>
            {' '}
            <div style={{ border: '1px solid' }}>
              Tähän tulee viewer <br /> asd
            </div>
          </Col>
          <Col style={colStyle}>
            <Timeline />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
