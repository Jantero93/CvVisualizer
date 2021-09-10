import {
  ToggleJobModalType,
  ToggleWorkModalType
} from '../reducers/modalReducer';

export const toggleJobModal = (): ToggleJobModalType => ({
  type: 'TOGGLE_JOB_MODAL'
});

export const toggleWorkModal = (): ToggleWorkModalType => ({
  type: 'TOGGLE_WORK_MODAL'
});
