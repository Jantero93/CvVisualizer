import React from 'react';

import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { toggleWorkModal } from '../../store/reducers/modalReducer';

const WorkplaceModal: React.FC = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({ type: 'TOGGLE_WORK_MODAL' } as toggleWorkModal);
  };

  return (
    <>
      <Modal show animation={false}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default WorkplaceModal;
