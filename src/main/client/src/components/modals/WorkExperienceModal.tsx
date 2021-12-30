/** React */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/** Reducers, actions */
import { addWorkExperience } from '../../store/actions/mainDataActions';
import { toggleWorkExperienceModal } from '../../store/actions/modalActions';
import { RootState } from '../../store/reducers/rootReducer';

/** Services */
import WorkExperienceService from '../../services/WorkExperienceService';

/** Types */
import { WorkExperience, Workplace } from '../../types/types';

/** Utils  */
import moment from 'moment';

/** Css, Ui */
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

const WorkExperienceModal: React.FC = () => {
  const [description, setDescription] = useState<string>('');
  const [endDate, setEndDate] = useState<Date>();
  const [startDate, setStartDate] = useState<Date>();
  const [title, setTitle] = useState<string>('');
  const [workplaceId, setWorkplaceId] = useState<string>();

  const workPlaces: Workplace[] = useSelector(
    (state: RootState) => state.mainData.workplaces
  );

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      setDescription('');
      setEndDate(new Date());
      setStartDate(new Date());
      setTitle('');
      setWorkplaceId(undefined);
    };
  }, []);

  const handleSave = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    const isDatesValid: boolean = moment(startDate).isBefore(endDate);

    if (!workplaceId || !title) {
      console.log('Please check title, workplace ic');
      return;
    }

    if (startDate && endDate && isDatesValid) {
      const newExperience: WorkExperience = {
        beginTime: startDate.toISOString(),
        description: description,
        endTime: endDate.toISOString(),
        username: 'testUser',
        title: title,
        workplaceRef: workplaceId
      };

      try {
        const response: WorkExperience = await WorkExperienceService.postOne(
          newExperience
        );
        dispatch(addWorkExperience(response));
        dispatch(toggleWorkExperienceModal());
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    } else {
      console.log('Please check dates');
    }
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
        <Form.Text muted>
          New experiences are updated to backend, but not in the front end,
          feature is coming on the future..
        </Form.Text>
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
