import { SetActiveTabType, ViewerTabs } from '../reducers/viewerReducer';

export const setActiveTab = (tab: ViewerTabs): SetActiveTabType => {
  return {
    payload: tab,
    type: 'SET_ACTIVE_TAB'
  };
};
