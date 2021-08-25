/* eslint-disable no-console */
import { Map } from 'ol';

import BaseLayer from 'ol/layer/Base';
import { defaults as defaultControls } from 'ol/control';
import { fromLonLat /*,toLonLat*/ } from 'ol/proj';
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

  constructor(targetDiv: HTMLElement) {
    const defaultLayer: VectorLayer = new VectorLayer({
      source: new VectorSource()
    });
    defaultLayer.setProperties({ id: 'default' });

    this.map = new Map({
      controls: defaultControls(),
      target: targetDiv,
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        defaultLayer
      ],
      view: new View({
        center: fromLonLat([37, 55]),
        zoom: 10
      })
    });
  }

  /**
   * Add Feature to layer
   * @param lon Longitude
   * @param lat Latitude
   * @param featureId if of feature
   * @param SVG SVG string
   * @param layerId Layer to add. If not given, feature will be added on 'default' layer
   */
  addSVG(
    lon: number,
    lat: number,
    featureId: string,
    SVG: string,
    layerId = 'default'
  ): void {
    if (
      this.getAllFeatures().some(
        (feature: Feature) => feature.getId() === featureId
      )
    ) {
      console.log(`Already added feature: ${featureId}`);
      return;
    }

    const newFeature: Feature = new Feature({
      geometry: new Point(fromLonLat([lon, lat]))
    });
    newFeature.setId(featureId);

    const featureStyle: Style = new Style({
      image: new Icon({
        src: SVG
      })
    });

    newFeature.setStyle(featureStyle);
    this.getLayer(layerId).getSource().addFeature(newFeature);
  }

  /**
   * Add vector layer on map
   * @param id of added layer
   */
  addLayer(id: string): void {
    if (this.getAllLayerIds().includes(id)) {
      console.log(`Already added layer: ${id}`);
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
  getAllFeatures(): Feature[] {
    const vectorSources: VectorSource[] = this.getAllLayerIds().map(
      (layerId: string) => this.getLayer(layerId).getSource()
    );
    const featureArrays: Feature[][] = vectorSources.map(
      (source: VectorSource) => source.getFeatures()
    );
    /** Return Feature[][] as Feature[] */
    return Array.prototype.concat.apply([], featureArrays);
  }

  /**
   * Get all layer ids as string array
   * @returns All Layer ids from map
   */
  getAllLayerIds(): string[] {
    const vectorLayers: VectorLayer[] = this.getAllLayers();
    return vectorLayers.map((layer: VectorLayer) => layer.getProperties().id);
  }

  /**
   * Return all vector layers from map
   * @returns Vector layer array
   */
  getAllLayers(): VectorLayer[] {
    const allLayers: BaseLayer[] = this.map.getLayers().getArray();
    return allLayers.filter(
      (layer) => layer instanceof VectorLayer
    ) as VectorLayer[];
  }

  /**
   * Get vector layer by id
   * @param id of wanter layer
   * @returns Vector layer
   */
  getLayer(id: string): VectorLayer {
    const vectorLayers: any[] = this.getAllLayers();
    return vectorLayers.find(
      (layer: VectorLayer) => layer.getProperties().id === id
    );
  }

  /**
   * Remove SVG icon from map
   * @param id of feature
   */
  removeSVG(id: string): void {
    const allLayers: VectorLayer[] = this.getAllLayers();
    const layerWithFeature: VectorLayer | undefined = allLayers.find(
      (layer: VectorLayer) =>
        layer
          .getSource()
          .getFeatures()
          .some((feature: Feature) => feature.getId() === id)
    );
    layerWithFeature &&
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
   * Set zoom level on view. 0 the most far out.
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