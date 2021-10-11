/** React */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/** Reducers, actions */
import { toggleWorkExperienceModal } from '../../store/actions/modalActions';
import { RootState } from '../../store/reducers/rootReducer';

/** Types */
import { Workplace } from '../../types/types';

/** Utils  */
import moment from 'moment';

/** Css, Ui */
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

const WorkExperienceModal: React.FC = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState<string>('');
  const [endDate, setEndDate] = useState<Date>();
  const [startDate, setStartDate] = useState<Date>();
  const [title, setTitle] = useState<string>('');
  const [workplaceId, setWorkplaceId] = useState<string>();

  const workPlaces: Workplace[] = useSelector(
    (state: RootState) => state.mainData.workplaces
  );

  useEffect(() => {
    return () => {
      setDescription('');
      setEndDate(new Date());
      setStartDate(new Date());
      setTitle('');
      setWorkplaceId(undefined);
    };
  }, []);

  const handleSave = (e: React.FormEvent): void => {
    console.log('form submitted');
    e.preventDefault();
  };

  const MapWorkplacesDropdown = (): JSX.Element[] => {
    return workPlaces.map((work: Workplace) => (
      <option key={work.id} value={work.id}>
        {`${work.name} ${work.address}`}
      </option>
    ));
  };

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
              <Form.Control
                as={'select'}
                defaultValue=""
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setWorkplaceId(e.target.value)
                }
              >
                <option value="">Choose workplace</option>
                {MapWorkplacesDropdown()}
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formEmployees">
              <Form.Label>Title</Form.Label>
              <Form.Control
                as={'input'}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTitle(e.target.value)
                }
              ></Form.Control>
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
            <Form.Control
              as={'textarea'}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDescription(e.target.value)
              }
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleSave}>
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default WorkExperienceModal;
