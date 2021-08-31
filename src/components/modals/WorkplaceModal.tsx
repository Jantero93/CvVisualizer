import React from 'react';
import { useDispatch } from 'react-redux';

import { Modal } from 'react-bootstrap';

import { toggleWorkModal } from '../../store/actions/modalActions';

const WorkplaceModal: React.FC = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleWorkModal());
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
