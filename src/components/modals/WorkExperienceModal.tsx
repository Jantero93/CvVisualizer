/** React */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/** Reducers, actions */
import { toggleWorkExperienceModal } from '../../store/actions/modalActions';
import { RootState } from '../../store/reducers/rootReducer';

/** Types */
import { Workplace } from '../../types/types';

/** Utils */
import moment from 'moment';

/** Css, Ui */
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

const WorkExperienceModal: React.FC = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [description, setDescription] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [workplace, setWorkplace] = useState<Workplace>();

  const workPlaces: Workplace[] = useSelector(
    (state: RootState) => state.mainData.workplaces
  );

  return (
    <Modal show animation={false}>
      <Modal.Header
        closeButton
        onClick={() => dispatch(toggleWorkExperienceModal())}
      >
        <Modal.Title>New Experience</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formName">
              <Form.Label>Workplace</Form.Label>
              <Form.Control as={'select'}>
                {workPlaces.map((work: Workplace) => (
                  <option key={work.id} value={work.id}>
                    {`${work.name} ${work.address}`}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formEmployees">
              <Form.Label>Title</Form.Label>
              <Form.Control as={'input'}></Form.Control>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setStartDate(moment(e.target.value).toDate())
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEndDate(moment(e.target.value).toDate())
              }
            />
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
