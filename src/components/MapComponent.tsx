/** React, Redux */
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/** Reducer, actions */
import { RootState } from '../store/reducers/rootReducer';
import {
  setMapClickedCoords,
  setMapClickedFeature,
  setMapView
} from '../store/actions/mapActions';
import { toggleWorkModal } from '../store/actions/modalActions';

/** Types */
import { Location, Workplace } from '../types/types';

/** Components */
import { Button } from 'react-bootstrap';
import CvMap from './non-client/CvMap';
import WorkplaceModal from './modals/WorkplaceModal';

/** Css, Icons, UI */
import WorkplaceIcon from '../map-icons/workplace.svg';
import 'ol/ol.css';
import '../styles/MapComponent.css';

const MapComponent: React.FC = () => {
  const [map, setMap] = useState<CvMap>();
  const mapRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  /** Redux states */
  const mapZoom: number = useSelector((state: RootState) => state.map.zoom);
  const mapLocation: Location = useSelector(
    (state: RootState) => state.map.location
  );
  const mapSizeChanged: boolean = useSelector(
    (state: RootState) => state.map.sizeChanged
  );
  const showWorkModal: boolean = useSelector(
    (state: RootState) => state.modal.showWorkplaceModal
  );
  const mapWorkPlaces: Workplace[] = useSelector(
    (state: RootState) => state.map.workplaces
  );

  /** Update map from Redux && Split view change */
  useEffect(() => {
    map?.setZoomLevel(mapZoom);
    map?.setCenterView(mapLocation.longitude, mapLocation.latitude);
    mapSizeChanged && map?.updateSize();
  }, [map, mapLocation, mapSizeChanged, mapZoom]);

  /** Init map */
  useEffect(() => {
    /** init coords and zoom is set in mapReducer's initial state */
    setMap(new CvMap(mapRef.current as HTMLElement));

    /** Update map's coordinates & view on redux */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mapRef.current?.addEventListener('viewchange', (e: any) => {
      const { location, zoom } = e.detail;
      dispatch(setMapView(location, zoom));
    });

    /** Get coordinates & selected feature from map click */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mapRef.current?.addEventListener('click-map', (e: any) => {
      dispatch(setMapClickedCoords(e.detail.location));
      dispatch(setMapClickedFeature(e.detail.featureId));
    });
  }, [dispatch]);

  /** Update icons on change */
  useEffect(() => {
    map?.removeAllSVGs();
    mapWorkPlaces.forEach((workplace: Workplace) => {
      const { latitude, longitude } = workplace.location;
      map?.addSVG(
        longitude,
        latitude,
        workplace.id as string,
        WorkplaceIcon,
        'default'
      );
    });
  }, [mapWorkPlaces, map]);

  const toggleModal = (): void => {
    dispatch(toggleWorkModal());
  };

  return (
    <div id="map-container">
      <div className="tool-bar">
        <Button variant="primary" onClick={toggleModal}>
          Add Place
        </Button>
      </div>
      <div id="map" ref={mapRef} />
      {showWorkModal && <WorkplaceModal />}
    </div>
  );
};

export default MapComponent;
