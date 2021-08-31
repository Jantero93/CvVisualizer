import { SetMapViewType, SetZoomType } from '../reducers/mapReducer';
import { Location } from '../../types/types';

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
