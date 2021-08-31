import { setMapViewAction, setZoomAction } from '../reducers/mapReducer';

import { Location } from '../../types/types';

export const setView = (location: Location, zoom: number): setMapViewAction => {
  return {
    payload: {
      location,
      zoom
    },
    type: 'SET_MAPVIEW'
  };
};

export const setZoom = (zoom: number): setZoomAction => {
  return {
    payload: zoom,
    type: 'SET_ZOOM'
  };
};
