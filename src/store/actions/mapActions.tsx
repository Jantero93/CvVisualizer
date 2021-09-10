import {
  MapSizeHasChangedType,
  SetMapClickCoordsType,
  SetMapClickFeatureType,
  SetMapViewType,
  SetZoomType
} from '../reducers/mapReducer';
import { Location } from '../../types/types';

export const mapSizeHasChanged = (
  hasChanged: boolean
): MapSizeHasChangedType => ({
  type: 'MAP_SIZE_CHANGED',
  payload: hasChanged
});

export const setMapClickedCoords = (
  clickedLocation: Location
): SetMapClickCoordsType => ({
  payload: clickedLocation,
  type: 'LAST_CLICKED_COORDS'
});

export const setMapClickedFeature = (
  clickedFeatureId: string
): SetMapClickFeatureType => ({
  payload: clickedFeatureId,
  type: 'LAST_CLICKED_FEATURE_ID'
});

export const setMapView = (
  location: Location,
  zoom: number
): SetMapViewType => ({
  payload: {
    location,
    zoom
  },
  type: 'SET_MAPVIEW'
});

export const setMapZoom = (zoom: number): SetZoomType => ({
  payload: zoom,
  type: 'SET_ZOOM'
});
