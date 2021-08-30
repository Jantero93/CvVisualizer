import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { MapState } from '../store/mapReducer';
import { useSelector, useDispatch } from 'react-redux';
import medicine from '../map-icons/cardiogram.svg';

import { setZoomAction } from '../store/mapReducer';

import 'ol/ol.css';
import '../styles/MapComponent.css';

import CvMap from './non-client/CvMap';

export const MapComponent: React.FC = () => {
  const [map, setMap] = useState<CvMap>();
  const mapRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const mapZoom: number = useSelector<MapState, MapState['zoom']>(
    (state) => state.zoom
  );
  /*
  const mapLocation: Location = useSelector<MapState, MapState['location']>(
    (state) => state.location
  );

  const mapWorkPlaces: Workplace[] = useSelector<
    MapState,
    MapState['workplaces']
  >((state) => state.workplaces);
*/

  useEffect(() => {
    if (!map) {
      setMap(new CvMap(mapRef.current as HTMLElement));
      // eslint-disable-next-line
      mapRef.current?.addEventListener('viewchange', (e: any) => {
        dispatch({ payload: e.detail, type: 'SET_MAPVIEW' });
      });
    }

    map?.setZoomLevel(mapZoom);
  }, [map, dispatch, mapZoom]);

  const testButtonClicked = (): void => {
    map?.removeLayer('juttuja');
    dispatch({ payload: 20, type: 'SET_ZOOM' } as setZoomAction);
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
