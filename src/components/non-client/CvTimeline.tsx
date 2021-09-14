/* eslint-disable no-console */

/** VisJs, VisData */
import { DataGroup, DataItem, TimelineOptions } from 'vis-timeline';
import { DataSet } from 'vis-data';
import { Timeline } from 'vis-timeline';

import moment from 'moment';

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

  /**
   * Adds dataitem to timeline. Specify optional group on item.
   * @param item Data item to timeline
   */
  private addItem(item: DataItem): void {
    if (this.dataItems.get(item.id as string)) {
      console.error(`Item with id ${item.id} exists already`);
      return;
    }

    this.dataItems.add(item);
  }

  /**
   * Add group. All non-group items will go invisible, but will exists in timeline.
   * These invisible items will not come back after all groups are deleted
   * @param group Group to add
   */
  addGroup(group: DataGroup): void {
    /** Add data group on first */
    !this.dataGroups.length && this.timeline.setGroups(this.dataGroups);

    if (this.dataGroups.get(group.id as string)) {
      console.error(`Group with id ${group.id} exists already`);
      return;
    }

    this.dataGroups.add(group);
  }

  /**
   * Clears data from timeline (doesn't destroy timeline from DOM)
   */
  clearData(): void {
    this.dataItems.clear();
    this.dataGroups.clear();
  }

  setItemsData(itemData: DataItem[]): void {
    itemData.forEach((item: DataItem) => this.dataItems.add(item));
  }

  setGroupdData(groupData: DataGroup[]): void {
    groupData.forEach((group: DataGroup) => this.dataGroups.add(group));
  }
}
