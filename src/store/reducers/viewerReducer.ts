export type ViewerTabs = 'employees' | 'workplaces';

export interface ViewerState {
  activeTab: string;
}

const initialState: ViewerState = {
  activeTab: 'employees'
};

export type SetActiveTabType = {
  type: 'SET_ACTIVE_TAB';
  payload: string;
};

export type ViewerActions = SetActiveTabType;

export const viewerReducer = (
  state: ViewerState = initialState,
  action: ViewerActions
): ViewerState => {
  switch (action.type) {
    case 'SET_ACTIVE_TAB':
      return { ...state, activeTab: action.payload };

    default:
      return state;
  }
};
