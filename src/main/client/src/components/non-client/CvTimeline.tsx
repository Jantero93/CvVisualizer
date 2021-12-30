/* eslint-disable no-console */

/** VisJs, VisData */
import { DataGroup, DataItem, TimelineOptions } from 'vis-timeline';
import { DataSet } from 'vis-data';
import { Timeline } from 'vis-timeline';
export default class CvTimeline {
  readonly timeline: Timeline;
  readonly dataGroups: DataSet<DataGroup>;
  readonly dataItems: DataSet<DataItem>;

  /**
   * initialize timeline without groups.
   * @param targetDiv Target Div to render
   */
  constructor(targetDiv: HTMLElement) {
    this.dataItems = new DataSet<DataItem>();
    this.dataGroups = new DataSet<DataGroup>();

    const options: TimelineOptions = {
      selectable: true
    };

    this.timeline = new Timeline(targetDiv, this.dataItems, options);
  }

  setData(itemData: DataItem[], groupData?: DataGroup[]): void {
    this.timeline.setGroups();
    this.timeline.setData({ items: itemData, groups: groupData });
  }
}
