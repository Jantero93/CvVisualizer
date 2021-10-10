import React from 'react';
import { Modal, Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toggleWorkExperienceModal } from '../../store/actions/modalActions';

const WorkExperienceModal: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Modal show animation={false}>
      <Modal.Header
        closeButton
        onClick={() => dispatch(toggleWorkExperienceModal())}
      >
        <Modal.Title>New workplace</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formName">
              <Form.Label>Name</Form.Label>
            </Form.Group>

            <Form.Group as={Col} controlId="formEmployees">
              <Form.Label>Employees</Form.Label>
              <Form.Control as={'select'}>
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
            <Form.Control />
            <Form.Text muted>jotain</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Description</Form.Label>
            <Form.Control as={'textarea'} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default WorkExperienceModal;
