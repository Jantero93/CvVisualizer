export interface ModalState {
  showWorkplaceModal: boolean;
  showJobExpModal: boolean;
}

const initialState: ModalState = {
  showJobExpModal: false,
  showWorkplaceModal: false
};

export type ToggleJobModalType = { type: 'TOGGLE_JOB_MODAL' };
export type ToggleWorkModalType = { type: 'TOGGLE_WORK_MODAL' };
export type ModalActions = ToggleJobModalType | ToggleWorkModalType;

export const modalReducer = (
  state: ModalState = initialState,
  action: ModalActions
): ModalState => {
  switch (action.type) {
    case 'TOGGLE_JOB_MODAL':
      return {
        ...state,
        showJobExpModal: !state.showJobExpModal,
        showWorkplaceModal: false
      };

    case 'TOGGLE_WORK_MODAL':
      return {
        ...state,
        showWorkplaceModal: !state.showWorkplaceModal,
        showJobExpModal: false
      };

    default:
      return state;
  }
};
