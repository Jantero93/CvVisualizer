import {
  SetMapViewType,
  SetZoomType,
  SetMapClickCoordsType
} from '../reducers/mapReducer';
import { Location } from '../../types/types';

export const setMapClickedCoords = (
  clickedLocation: Location
): SetMapClickCoordsType => {
  return {
    payload: clickedLocation,
    type: 'LAST_CLICKED_COORDS'
  };
};

export const setMapView = (
  location: Location,
  zoom: number
): SetMapViewType => {
  return {
    payload: {
      location,
      zoom
    },
    type: 'SET_MAPVIEW'
  };
};

export const setMapZoom = (zoom: number): SetZoomType => {
  return {
    payload: zoom,
    type: 'SET_ZOOM'
  };
};
