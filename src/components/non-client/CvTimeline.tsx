/* eslint-disable no-console */

/** VisJs, VisData */
import { DataGroup, DataItem, TimelineOptions } from 'vis-timeline';
import { DataSet } from 'vis-data';
import { Timeline } from 'vis-timeline';

export default class CvTimeline {
  readonly timeline: Timeline;
  readonly dataGroups: DataSet<DataGroup>;
  readonly dataItems: DataSet<DataItem>;

  constructor(targetDiv: HTMLElement) {
    this.dataGroups = new DataSet<DataGroup>();
    this.dataItems = new DataSet<DataItem>();
    const options: TimelineOptions = {};

    this.timeline = new Timeline(
      targetDiv,
      this.dataItems,
      this.dataGroups,
      options
    );
  }
}
