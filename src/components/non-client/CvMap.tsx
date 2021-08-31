/* eslint-disable no-console */
import { Map, MapEvent } from 'ol';

import { Coordinate } from 'ol/coordinate';
import { defaults as defaultControls } from 'ol/control';
import { fromLonLat, toLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import Style from 'ol/style/Style';
import TileLayer from 'ol/layer/Tile';
import Point from 'ol/geom/Point';
import { View } from 'ol';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';

export default class CvMap {
  readonly map: Map;

  /**
   * @param targetDiv Div where map is initialized
   */
  constructor(targetDiv: HTMLElement) {
    this.map = new Map({
      controls: defaultControls(),
      target: targetDiv,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([21, 61]),
        zoom: 10
      })
    });

    this.map.on('moveend', (e: MapEvent) => {
      targetDiv.dispatchEvent(
        new CustomEvent('viewchange', {
          detail: {
            zoom: e.map.getView().getZoom(),
            location: {
              latitude: toLonLat(e.map.getView().getCenter() as Coordinate)[1],
              longitude: toLonLat(e.map.getView().getCenter() as Coordinate)[0]
            }
          }
        })
      );
    });
  }

  /**
   * Add Feature to layer
   * @param lon Longitude
   * @param lat Latitude
   * @param featureId id of feature
   * @param SVG SVG string
   * @param layerId Layer where SVG is added
   */
  addSVG(
    lon: number,
    lat: number,
    featureId: string,
    SVG: string,
    layerId: string
  ): void {
    const mapContainsFeature: boolean = this.getAllFeatures().some(
      (feature: Feature) => feature.getId() === featureId
    );

    if (mapContainsFeature) {
      console.error(`Already added feature: ${featureId}`);
      return;
    }

    if (!this.getAllVectorLayerIds().includes(layerId)) {
      console.error(`No layer: ${layerId}`);
      return;
    }

    const newFeature: Feature = new Feature({
      geometry: new Point(fromLonLat([lon, lat]))
    });

    const featureStyle: Style = new Style({
      image: new Icon({
        src: SVG
      })
    });

    newFeature.setStyle(featureStyle);
    newFeature.setId(featureId);

    this.getVectorLayer(layerId).getSource().addFeature(newFeature);
  }

  /**
   * Add vector layer on map
   * @param id id of added layer
   */
  addVectorLayer(id: string): void {
    if (this.getAllVectorLayerIds().includes(id)) {
      console.error(`Already added layer: ${id}`);
      return;
    }

    const layer: VectorLayer = new VectorLayer({
      source: new VectorSource()
    });
    layer.setProperties({ id });

    this.map.addLayer(layer);
  }

  /**
   * Get all features from map
   * @returns Feature array
   */
  private getAllFeatures(): Feature[] {
    const allFeatures: Feature[][] = this.getAllVectorLayers().map(
      (layer: VectorLayer) => layer.getSource().getFeatures()
    );
    /** Return Feature[][] as Feature[] */
    return Array.prototype.concat.apply([], allFeatures);
  }

  /**
   * Get all layer ids from map
   * @returns String array
   */
  private getAllVectorLayerIds(): string[] {
    return this.getAllVectorLayers().map(
      (layer: VectorLayer) => layer.getProperties().id
    );
  }

  /**
   * Return all vector layers from map
   * @returns Vector layer array
   */
  private getAllVectorLayers(): VectorLayer[] {
    return this.map
      .getLayers()
      .getArray()
      .filter((layer) => layer instanceof VectorLayer) as VectorLayer[];
  }

  /**
   * Get vector layer by id
   * @param id of wanter layer
   * @returns Vector layer
   */
  private getVectorLayer(id: string): VectorLayer {
    return this.getAllVectorLayers().find(
      (layer: VectorLayer) => layer.getProperties().id === id
    ) as VectorLayer;
  }

  /**
   * Removes layer from map. All layer's features will be removed
   * @param id id of layer to remove
   */
  removeLayer(id: string): void {
    if (!this.getAllVectorLayerIds().includes(id)) {
      console.error(`No layer on map: ${id}`);
      return;
    }

    this.map.removeLayer(this.getVectorLayer(id));
  }

  /**
   * Remove SVG icon from map
   * @param id id of feature
   */
  removeSVG(id: string): void {
    const layerWithFeature: VectorLayer = this.getAllVectorLayers().find(
      (layer: VectorLayer) =>
        layer
          .getSource()
          .getFeatures()
          .some((feature: Feature) => feature.getId() === id)
    ) as VectorLayer;

    layerWithFeature
      .getSource()
      .removeFeature(layerWithFeature.getSource().getFeatureById(id));
  }

  /**
   * Center map on coordinates. Doesn't change zoom level.
   * @param lon Longitude
   * @param lat Latitude
   */
  setCenterView(lon: number, lat: number): void {
    this.map.setView(
      new View({
        center: fromLonLat([lon, lat]),
        zoom: this.map.getView().getZoom()
      })
    );
  }

  /**
   * Set zoom level on view. 0 the most far out. Doesn't change center view
   * @param zoomLevel
   */
  setZoomLevel(zoomLevel: number): void {
    this.map.setView(
      new View({
        zoom: zoomLevel,
        center: this.map.getView().getCenter()
      })
    );
  }
}
