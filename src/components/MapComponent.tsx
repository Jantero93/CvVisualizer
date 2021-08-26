import React from 'react';
import { useState, useEffect, useRef } from 'react';

import medicine from '../map-icons/cardiogram.svg';

import 'ol/ol.css';
import '../styles/MapComponent.css';

import CvMap from './non-client/CvMap';

export const MapComponent: React.FC = () => {
  const [map, setMap] = useState<CvMap>();
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const test = new CvMap(mapRef.current as HTMLElement);
    setMap(test);
  }, []);

  const testButtonClicked = (): void => {
    map?.removeLayer('juttuja');
  };

  const addFeatureButtonClicked = (): void => {
    map?.addSVG(0, 50, 'medicine', medicine, 'juttuja');
  };

  return (
    <div id="map-container">
      <div className="buttons">
        <button onClick={addFeatureButtonClicked}>lisaa ikoni</button>
        <button onClick={testButtonClicked}>Test Btn</button>
        <button onClick={addFeatureButtonClicked}>Show form component</button>
      </div>
      <div id="map" ref={mapRef} />
    </div>
  );
};
