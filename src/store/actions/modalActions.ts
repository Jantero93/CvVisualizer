import { toggleJobModal, toggleWorkModal } from '../reducers/modalReducer';

export const toggleWorkModalAction = (): toggleWorkModal => {
  return {
    type: 'TOGGLE_WORK_MODAL'
  };
};

export const toggleJobModalAction = (): toggleJobModal => {
  return {
    type: 'TOGGLE_JOB_MODAL'
  };
};
