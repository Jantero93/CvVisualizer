import React from 'react';

import '../styles/Homepage.css';

import MapComponent from './MapComponent';
import Timeline from './Timeline';
import WorkplaceForm from './Forms/WorkplaceForm';

import { Row, Col, Container } from 'react-bootstrap';

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

const Homepage: React.FC = () => {
  return (
    <div className="home-page">
      <Container fluid style={containerStyle}>
        <Row style={rowStyle}>
          <MapComponent />
        </Row>
        <Row>
          <Col>
            <WorkplaceForm />
          </Col>
          <Col>
            <Timeline />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
