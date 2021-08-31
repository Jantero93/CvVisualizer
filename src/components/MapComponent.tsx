import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import medicine from '../map-icons/cardiogram.svg';

import { Location } from '../types/types';

import { RootState } from '../store/reducers/rootReducer';
import {
  setMapClickedCoords,
  setMapView,
  setMapZoom
} from '../store/actions/mapActions';
import { toggleWorkModal } from '../store/actions/modalActions';

import { Button } from 'react-bootstrap';

import CvMap from './non-client/CvMap';
import WorkplaceModal from './modals/WorkplaceModal';

import 'ol/ol.css';
import '../styles/MapComponent.css';

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
    /** init coords and zoom is set in mapReducer's initial state */
    setMap(new CvMap(mapRef.current as HTMLElement));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mapRef.current?.addEventListener('viewchange', (e: any) => {
      const { location, zoom } = e.detail;
      dispatch(setMapView(location, zoom));
    });

    mapRef.current?.addEventListener('click-coords', (e: any) => {
      dispatch(setMapClickedCoords(e.detail));
    });
  }, [dispatch]);

  const testButtonClicked = (): void => {
    map?.removeLayer('juttuja');
    dispatch(setMapZoom(4));
  };

  const addFeatureButtonClicked = (): void => {
    map?.addVectorLayer('juttuja');
    map?.addSVG(0, 50, 'medicine', medicine, 'juttuja');
  };

  const toggleModal = (): void => {
    dispatch(toggleWorkModal());
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
