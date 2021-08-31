import { Location, Workplace, MapView } from '../../types/types';

export interface MapState {
  location: Location;
  workplaces: Workplace[];
  zoom: number;
}

const initialState: MapState = {
  location: { latitude: 61.48, longitude: 23.79 },
  workplaces: [],
  zoom: 13
};

export type addWorkPlaceAction = { type: 'ADD_WORKPLACE'; payload: Workplace };
export type removeWorkPlaceAction = {
  type: 'REMOVE_WORKPLACE';
  payload: Workplace;
};
export type setMapViewAction = { type: 'SET_MAPVIEW'; payload: MapView };
export type setLocationAction = { type: 'SET_LOCATION'; payload: Location };
export type setWorkPlacesAction = {
  type: 'SET_WORKPLACES';
  payload: Workplace[];
};
export type setZoomAction = { type: 'SET_ZOOM'; payload: number };

export type MapActions =
  | addWorkPlaceAction
  | removeWorkPlaceAction
  | setMapViewAction
  | setLocationAction
  | setWorkPlacesAction
  | setZoomAction;

export const mapReducer = (
  state: MapState = initialState,
  action: MapActions
): MapState => {
  switch (action.type) {
    case 'ADD_WORKPLACE':
      return { ...state, workplaces: state.workplaces.concat(action.payload) };

    case 'REMOVE_WORKPLACE':
      return {
        ...state,
        workplaces: state.workplaces.filter(
          (work: Workplace) => action.payload !== work
        )
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