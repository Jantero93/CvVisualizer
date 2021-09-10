import { SetActiveTabType, ViewerTabs } from '../reducers/viewerReducer';

export const setActiveTab = (tab: ViewerTabs): SetActiveTabType => ({
  payload: tab,
  type: 'SET_ACTIVE_TAB'
});
