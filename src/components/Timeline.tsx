/** React */
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/** Reducers, actions */
import { RootState } from '../store/reducers/rootReducer';

/** Timeline */
import CvTimeline from './non-client/CvTimeline';

/** Types */
import { Person, WorkExperience, Workplace } from '../types/types';
import { DataItem, DataGroup } from 'vis-timeline';

/** CSS, UI */
import 'vis-timeline/styles/vis-timeline-graph2d.css';

const Timeline: React.FC = () => {
  const [timeline, setTimeline] = useState<CvTimeline>();
  const timelineRef = useRef<HTMLDivElement>(null);
  const selectedViewerItem: Person | Workplace | undefined = useSelector(
    (state: RootState) => state.viewer.selectedItem
  );

  const personsToTimeline = (): DataItem[] => {
    return (selectedViewerItem as Person).workExperience!.map(
      (work: WorkExperience) => {
        const exp: DataItem = { start: work.beginTime, content: work.title };
        return exp;
      }
    );
  };

  useEffect(() => {
    setTimeline(new CvTimeline(timelineRef.current as HTMLElement));
  }, []);

  useEffect(() => {
    if (selectedViewerItem) {
      timeline?.clearData();
      'username' in (selectedViewerItem as Person | Workplace)
        ? timeline?.setItemsData(personsToTimeline())
        : console.log('-45');
    }
  }, [selectedViewerItem]);

  return (
    <div className="timeline-app">
      <div id="timeline" ref={timelineRef} />
    </div>
  );
};

export default Timeline;
