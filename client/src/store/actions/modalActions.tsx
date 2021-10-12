import {
  ToggleJobModalType,
  ToggleWorkModalType
} from '../reducers/modalReducer';

export const toggleWorkExperienceModal = (): ToggleJobModalType => ({
  type: 'TOGGLE_WORK_EXPERIENCE_MODAL'
});

export const toggleWorkModal = (): ToggleWorkModalType => ({
  type: 'TOGGLE_WORK_MODAL'
});
