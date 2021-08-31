import {
  ToggleJobModalType,
  ToggleWorkModalType
} from '../reducers/modalReducer';

export const toggleJobModal = (): ToggleJobModalType => {
  return {
    type: 'TOGGLE_JOB_MODAL'
  };
};

export const toggleWorkModal = (): ToggleWorkModalType => {
  return {
    type: 'TOGGLE_WORK_MODAL'
  };
};
