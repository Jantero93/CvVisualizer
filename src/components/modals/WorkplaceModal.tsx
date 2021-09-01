import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Modal, Form, Button, Col, Row } from 'react-bootstrap';

import { Workplace } from '../../types/types';

import { toggleWorkModal } from '../../store/actions/modalActions';
import { addWorkPlace } from '../../store/actions/mapActions';

const WorkplaceModal: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [size, setSize] = useState<string>('tiny');
  const [description, setDescription] = useState<string>('');

  const dispatch = useDispatch();

  const handleSave = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();

    const newWork: Workplace = {
      location: { latitude: 0, longitude: 0 },
      name,
      description,
      size
    };

    if (!name.length) {
      console.error('No name');
      return;
    }

    dispatch(addWorkPlace(newWork));
    dispatch(toggleWorkModal());
  };

  return (
    <>
      <Modal show animation={false}>
        <Modal.Header closeButton onClick={() => dispatch(toggleWorkModal())}>
          <Modal.Title>New workplace</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Company name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formEmployees">
                <Form.Label>Employees</Form.Label>
                <Form.Control
                  as={'select'}
                  onChange={(e) => setSize(e.target.value)}
                >
                  <option value="tiny">under 5</option>
                  <option value="small">6 - 25</option>
                  <option value="medium-minus">26 - 100</option>
                  <option value="medium">101 - 300</option>
                  <option value="medium-plus">301 - 1000</option>
                  <option value="large">1001 - 3000</option>
                  <option value="very large">over 3000</option>
                </Form.Control>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as={'textarea'}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Button onClick={handleSave} variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WorkplaceModal;
