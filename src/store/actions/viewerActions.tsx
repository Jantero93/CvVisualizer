/** Types */
import { Person, Workplace } from '../../types/types';

import {
  SetActiveTabType,
  SetSelectedItemType,
  ViewerTabs
} from '../reducers/viewerReducer';

export const setActiveTab = (tab: ViewerTabs): SetActiveTabType => ({
  payload: tab,
  type: 'SET_ACTIVE_TAB'
});

export const setSelectedItem = (
  selectedItem: Person | Workplace
): SetSelectedItemType => ({
  payload: selectedItem,
  type: 'SET_SELECTED_ITEM'
});
