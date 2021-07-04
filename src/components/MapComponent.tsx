import React from 'react';
import { FunctionComponent } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

import { defaults as defaultControls } from 'ol/control';
import Feature from 'ol/Feature';
import Icon from 'ol/style/Icon';
import { fromLonLat } from 'ol/proj';
import { Map } from 'ol';
import OSM from 'ol/source/OSM';
import Point from 'ol/geom/Point';
import TileLayer from 'ol/layer/Tile';
import { View } from 'ol';
import Style from 'ol/style/Style';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';


import 'ol/ol.css';

const mapStyles = {
  width: '100%',
  height: '500px'
};

export const MapComponent: FunctionComponent = () => {
  const [map, setMap] = useState<Map>();
  // eslint-disable-next-line
  const [defaultLayer, setDefaultLayer] = useState<VectorLayer>(new VectorLayer());
  // eslint-disable-next-line
  const [defaultSource, setDefaultSource] = useState<VectorSource>(new VectorSource());

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
        ///  center: fromLonLat([23.8, 61.6]),
        center: [0, 0],
        zoom: 3
      })
    });
    setMap(map);
    // eslint-disable-next-line
  }, []);

  const testButtonClicked = (): void => {
    map!.setView(
      new View({
        center: fromLonLat([-73.95, 40.7]),
        zoom: 9
      })
      );
    };


  const addFeatureButtonClicked = (): void => {
    const newFeature: Feature = new Feature({
      geometry: new Point([0, 0]),
      name: 'testi nimi'
    });

    newFeature.setId(0);

    const featureStyle: Style = new Style({
      image: new Icon({
        src: 'null',
        anchor: [0, 0],
        size: [32, 32]
      })
    });

    newFeature.setStyle(featureStyle);
    defaultSource.addFeature(newFeature);
  };

  return (
    <div id="map-container">
      <button onClick={testButtonClicked}>Test Btn</button>
      <button onClick={addFeatureButtonClicked}>Add Feature</button>
      <div id="map" ref={mapRef} style={mapStyles} />
    </div>
  );
};
