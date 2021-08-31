import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { RootState } from '../store/reducers/rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import medicine from '../map-icons/cardiogram.svg';
import { Location } from '../types/types';
import { setZoomAction } from '../store/reducers/mapReducer';

import { Button } from 'react-bootstrap';
import WorkplaceModal from './Forms/WorkplaceModal';

import { toggleWorkModal } from '../store/reducers/modalReducer';

import 'ol/ol.css';
import '../styles/MapComponent.css';

import CvMap from './non-client/CvMap';

const MapComponent: React.FC = () => {
  const [map, setMap] = useState<CvMap>();
  const mapRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const mapZoom: number = useSelector((state: RootState) => state.map.zoom);

  const mapLocation: Location = useSelector(
    (state: RootState) => state.map.location
  );

  const showWorkModal: boolean = useSelector(
    (state: RootState) => state.modal.showWorkplaceModal
  );

  useEffect(() => {
    map?.setZoomLevel(mapZoom);
    map?.setCenterView(mapLocation.longitude, mapLocation.latitude);
  }, [map, mapLocation, mapZoom]);

  useEffect(() => {
    setMap(new CvMap(mapRef.current as HTMLElement));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mapRef.current?.addEventListener('viewchange', (e: any) => {
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

  const toggleModal = (): void => {
    dispatch({ type: 'TOGGLE_WORK_MODAL' } as toggleWorkModal);
  };

  return (
    <div id="map-container">
      <div className="tool-bar">
        <Button variant="primary" onClick={toggleModal}>
          Add Place
        </Button>{' '}
        <button onClick={addFeatureButtonClicked}>lisaa ikoni</button>
        <button onClick={testButtonClicked}>Test Btn</button>
        <button onClick={addFeatureButtonClicked}>Show form component</button>
      </div>
      <div id="map" ref={mapRef} />
      {showWorkModal && <WorkplaceModal />}
    </div>
  );
};

export default MapComponent;
