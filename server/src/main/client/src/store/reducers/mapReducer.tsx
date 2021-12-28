import { Location, MapView } from '../../types/types';
import { mapInitialState } from './initialStates';

export interface MapState {
  clickedCoords: Location;
  clickedFeatureId?: string;
  location: Location;
  sizeChanged: boolean;
  zoom: number;
}

const initialState: MapState = mapInitialState;

export type MapSizeHasChangedType = {
  type: 'MAP_SIZE_CHANGED';
  payload: boolean;
};

export type SetMapClickCoordsType = {
  type: 'LAST_CLICKED_COORDS';
  payload: Location;
};
export type SetMapClickFeatureType = {
  type: 'LAST_CLICKED_FEATURE_ID';
  payload: string;
};
export type SetMapViewType = { type: 'SET_MAPVIEW'; payload: MapView };
export type SetMapLocationType = { type: 'SET_LOCATION'; payload: Location };
export type SetZoomType = { type: 'SET_ZOOM'; payload: number };

export type MapActions =
  | MapSizeHasChangedType
  | SetMapClickCoordsType
  | SetMapClickFeatureType
  | SetMapViewType
  | SetMapLocationType
  | SetZoomType;

export const mapReducer = (
  state: MapState = initialState,
  action: MapActions
): MapState => {
  switch (action.type) {
    case 'MAP_SIZE_CHANGED':
      return { ...state, sizeChanged: !state.sizeChanged };

    case 'LAST_CLICKED_COORDS':
      return {
        ...state,
        clickedCoords: action.payload
      };

    case 'LAST_CLICKED_FEATURE_ID':
      return {
        ...state,
        clickedFeatureId: action.payload
      };

    case 'SET_LOCATION':
      return {
        ...state,
        location: action.payload
      };

    case 'SET_MAPVIEW':
      return {
        ...state,
        location: action.payload.location,
        zoom: action.payload.zoom
      };

    case 'SET_ZOOM':
      return { ...state, zoom: action.payload };

    default:
      return state;
  }
};
