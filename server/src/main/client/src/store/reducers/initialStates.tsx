import { MainDataState } from './mainDataReducer';
import { ModalState } from './modalReducer';
import { MapState } from './mapReducer';
import { ViewerState } from './viewerReducer';

export const mainDataInitialState: MainDataState = {
  persons: [],
  workExperiences: [],
  workplaces: []
};

export const modalInitialState: ModalState = {
  showWorkExperienceModal: false,
  showWorkplaceModal: false
};

export const mapInitialState: MapState = {
  clickedCoords: { latitude: 0, longitude: 0 },
  clickedFeatureId: undefined,
  sizeChanged: false,
  location: { latitude: 61.48, longitude: 23.79 },
  zoom: 13
};

export const viewerInitialState: ViewerState = {
  activeTab: 'workplaces',
  selectedItem: undefined
};
