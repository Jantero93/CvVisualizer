import { Person, Workplace } from '../../types/types';

export type ViewerTabs = 'employees' | 'workplaces';

export interface ViewerState {
  activeTab: ViewerTabs;
  selectedItem?: Workplace | Person;
}

const initialState: ViewerState = {
  activeTab: 'workplaces',
  selectedItem: undefined
};

export type SetActiveTabType = {
  type: 'SET_ACTIVE_TAB';
  payload: ViewerTabs;
};

export type SetSelectedItemType = {
  type: 'SET_SELECTED_ITEM';
  payload: Workplace | Person;
};

export type ViewerActions = SetActiveTabType | SetSelectedItemType;

export const viewerReducer = (
  state: ViewerState = initialState,
  action: ViewerActions
): ViewerState => {
  switch (action.type) {
    case 'SET_ACTIVE_TAB':
      return { ...state, activeTab: action.payload };

    case 'SET_SELECTED_ITEM':
      return { ...state, selectedItem: action.payload };

    default:
      return state;
  }
};
