import React from 'react';
import { FunctionComponent } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

import { defaults as defaultControls } from 'ol/control';
import Feature from 'ol/Feature';
import Icon from 'ol/style/Icon';
import { fromLonLat /*,toLonLat*/ } from 'ol/proj';
import { Map } from 'ol';
import OSM from 'ol/source/OSM';
import Point from 'ol/geom/Point';
import TileLayer from 'ol/layer/Tile';
import { View } from 'ol';
import Style from 'ol/style/Style';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { MapBrowserEvent } from 'ol';

import medicine from '../map-icons/cardiogram.svg'
import test from '../map-icons/makeup.svg'

import 'ol/ol.css';
import '../styles/MapComponent.css'

export const MapComponent: FunctionComponent = () => {
  const [map, setMap] = useState<Map>();
  // eslint-disable-next-line
  const [defaultSource, setDefaultSource] = useState<VectorSource>(new VectorSource());
  // eslint-disable-next-line
  const [defaultLayer, setDefaultLayer] = useState<VectorLayer>(new VectorLayer());

  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    defaultLayer.setSource(defaultSource);

    const map: Map = new Map({
      controls: defaultControls(),
      target: mapRef.current as HTMLElement,
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        defaultLayer
      ],
      view: new View({
        center: fromLonLat([23.8, 61.6]),
        zoom: 0
      })
    });

    map.on("singleclick", (event: MapBrowserEvent<UIEvent>) => {
      const featuresd: Feature[] = map.getFeaturesAtPixel(event.pixel) as Feature[];
      console.log('asd')
    });

    setMap(map);
  }, []);

  const testButtonClicked = (): void => {
    map?.setView(
      new View({
        center: fromLonLat([-73.95, 40.7]),
        zoom: 9
      })
    );
  };

  const imageSize = (src: unknown): number => 
  (src as HTMLImageElement).height

  const addFeatureButtonClicked = (): void => {
    const newFeature: Feature = new Feature({
      geometry: new Point([0, 0]),
      name: 'test of name'
    });

    const featureStyle: Style = new Style({
      image: new Icon({
        // src: 'data:image/sv g+xml;utf8,'  + escape(medicine)
          src: test,
      })
    });

    newFeature.setStyle(featureStyle);
    defaultSource.addFeature(newFeature);
  };

  return (
    <div id="map-container">
      <div className="buttons">
      <button onClick={addFeatureButtonClicked}>lisaa ikoni</button>
      <button onClick={testButtonClicked}>Test Btn</button>
      <button onClick={addFeatureButtonClicked}>Show form component</button>
      </div>
      <div id="map" ref={mapRef}> </div>
    </div>
  );
};
