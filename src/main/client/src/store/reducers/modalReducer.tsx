import { modalInitialState } from './initialStates';
export interface ModalState {
  showWorkplaceModal: boolean;
  showWorkExperienceModal: boolean;
}

const initialState: ModalState = modalInitialState;

export type ToggleJobModalType = { type: 'TOGGLE_WORK_EXPERIENCE_MODAL' };
export type ToggleWorkModalType = { type: 'TOGGLE_WORK_MODAL' };
export type ModalActions = ToggleJobModalType | ToggleWorkModalType;

export const modalReducer = (
  state: ModalState = initialState,
  action: ModalActions
): ModalState => {
  switch (action.type) {
    case 'TOGGLE_WORK_EXPERIENCE_MODAL':
      return {
        ...state,
        showWorkExperienceModal: !state.showWorkExperienceModal,
        showWorkplaceModal: false
      };

    case 'TOGGLE_WORK_MODAL':
      return {
        ...state,
        showWorkplaceModal: !state.showWorkplaceModal,
        showWorkExperienceModal: false
      };

    default:
      return state;
  }
};
