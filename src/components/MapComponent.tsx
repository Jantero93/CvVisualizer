import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { MapState } from '../store/mapReducer';
import { useSelector, useDispatch } from 'react-redux';
import medicine from '../map-icons/cardiogram.svg';
import { Location } from '../types/types';
import { setZoomAction, setLocationAction } from '../store/mapReducer';

import 'ol/ol.css';
import '../styles/MapComponent.css';

import CvMap from './non-client/CvMap';

export const MapComponent: React.FC = () => {
  const [map, setMap] = useState<CvMap>();
  const mapRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const mapZoom: number = useSelector<MapState, MapState['zoom']>(
    (state: MapState) => state.zoom
  );

  const mapLocation: Location = useSelector<MapState, MapState['location']>(
    (state: MapState) => state.location
  );

  /*
  const mapWorkPlaces: Workplace[] = useSelector<
    MapState,
    MapState['workplaces']
  >((state) => state.workplaces);
*/

  useEffect(() => {
    map?.setZoomLevel(mapZoom);
    map?.setCenterView(mapLocation.longitude, mapLocation.latitude);
  }, [map, mapLocation, mapZoom]);

  useEffect(() => {
    setMap(new CvMap(mapRef.current as HTMLElement));

    mapRef.current?.addEventListener('viewchange', (e: any) => {
      console.log(`e.detail`, e.detail);
      dispatch({ payload: e.detail, type: 'SET_MAPVIEW' });
    });
  }, [dispatch]);

  const testButtonClicked = (): void => {
    map?.removeLayer('juttuja');
    dispatch({ payload: 2, type: 'SET_ZOOM' } as setZoomAction);
  };

  const addFeatureButtonClicked = (): void => {
    map?.addVectorLayer('juttuja');
    map?.addSVG(0, 50, 'medicine', medicine, 'juttuja');
  };

  return (
    <div id="map-container">
      <div id="map" ref={mapRef} />
      <div className="tool-bar">
        <button onClick={addFeatureButtonClicked}>lisaa ikoni</button>
        <button onClick={testButtonClicked}>Test Btn</button>
        <button onClick={addFeatureButtonClicked}>Show form component</button>
      </div>
    </div>
  );
};
