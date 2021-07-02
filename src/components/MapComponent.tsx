import React from 'react';
import { FunctionComponent } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

import { defaults as defaultControls, FullScreen, ScaleLine } from 'ol/control';
import { fromLonLat } from 'ol/proj';
import { Map } from 'ol';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import { View } from 'ol';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

import 'ol/ol.css';

const mapStyles = {
  width: '100%',
  height: '500px'
};

export const MapComponent: FunctionComponent = () => {
  // eslint-disable-next-line
  const [map, setMap] = useState<Map>();
  // eslint-disable-next-line
  const [defaultLayer, setDefaultLayer] = useState<VectorLayer>(new VectorLayer());
  // eslint-disable-next-line
  const [defaultSource, setDefaultSource] = useState<VectorSource>(new VectorSource());

  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line
    const map: Map = new Map({
      controls: defaultControls().extend([
        new FullScreen(),
        new ScaleLine({
          bar: true,
          steps: 4
        })
      ]),
      target: mapRef.current as HTMLElement,
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        defaultLayer
      ],
      view: new View({
        center: fromLonLat([23.8, 61.6]),
        zoom: 9
      })
    });

    setMap(map);
  }, []);

  const testButtonClicked = (): void => {
    map!.setView(
      new View({
        center: fromLonLat([-73.95, 40.7]),
        zoom: 9 
      })
    );
  };

  return (
    <>
      <div id="map-root">
        <button onClick={testButtonClicked}>Test Btn</button>
        <div id="map" ref={mapRef} style={mapStyles} />
      </div>
    </>
  );
};
