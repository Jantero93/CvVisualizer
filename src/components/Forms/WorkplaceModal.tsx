import React from 'react';

import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { toggleWorkModal } from '../../store/reducers/modalReducer';
import { toggleWorkModalAction } from '../../store/actions/modalActions';

const WorkplaceModal: React.FC = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleWorkModalAction());
  };

  return (
    <>
      <Modal show animation={false}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, your-e reading this text in a modal!</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default WorkplaceModal;
