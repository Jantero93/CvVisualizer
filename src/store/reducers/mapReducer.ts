import { Location, Workplace, MapView } from '../../types/types';

export interface MapState {
  clickedCoords: Location;
  location: Location;
  sizeChanged: boolean;
  workplaces: Workplace[];
  zoom: number;
}

const initialState: MapState = {
  clickedCoords: { latitude: 0, longitude: 0 },
  sizeChanged: false,
  location: { latitude: 61.48, longitude: 23.79 },
  workplaces: [],
  zoom: 13
};

export type AddWorkPlaceType = { type: 'ADD_WORKPLACE'; payload: Workplace };
export type MapSizeHasChangedType = { type: 'MAP_SIZE_CHANGED'; payload: boolean}
export type RemoveWorkPlaceType = {
  type: 'REMOVE_WORKPLACE';
  payload: Workplace;
};
export type SetMapClickCoordsType = {
  type: 'LAST_CLICKED_COORDS';
  payload: Location;
};
export type SetMapViewType = { type: 'SET_MAPVIEW'; payload: MapView };
export type SetMapLocationType = { type: 'SET_LOCATION'; payload: Location };
export type SetWorkPlaceType = {
  type: 'SET_WORKPLACES';
  payload: Workplace[];
};
export type SetZoomType = { type: 'SET_ZOOM'; payload: number };

export type MapActions =
  | AddWorkPlaceType
  | MapSizeHasChangedType
  | RemoveWorkPlaceType
  | SetMapClickCoordsType
  | SetMapViewType
  | SetMapLocationType
  | SetWorkPlaceType
  | SetZoomType;

export const mapReducer = (
  state: MapState = initialState,
  action: MapActions
): MapState => {
  switch (action.type) {
    case 'ADD_WORKPLACE':
      return { ...state, workplaces: state.workplaces.concat(action.payload) };

    case 'MAP_SIZE_CHANGED':
      return { ...state, sizeChanged: !state.sizeChanged }

    case 'REMOVE_WORKPLACE':
      return {
        ...state,
        workplaces: state.workplaces.filter(
          (work: Workplace) => action.payload !== work
        )
      };

    case 'LAST_CLICKED_COORDS':
      return {
        ...state,
        clickedCoords: action.payload
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

    case 'SET_WORKPLACES':
      return { ...state, workplaces: action.payload };

    case 'SET_ZOOM':
      return { ...state, zoom: action.payload };

    default:
      return state;
  }
};
