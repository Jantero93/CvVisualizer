/** React */
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/** Reducers, actions */
import { RootState } from '../store/reducers/rootReducer';

/** Timeline */
import CvTimeline from './non-client/CvTimeline';

/** Types */
import { Person, Workplace } from '../types/types';
import { DataItem, DataGroup } from 'vis-timeline';

/** CSS, UI */
import 'vis-timeline/styles/vis-timeline-graph2d.css';

const Timeline: React.FC = () => {
  const [timeline, setTimeline] = useState<CvTimeline>();
  const timelineRef = useRef<HTMLDivElement>(null);

  const selectedViewerItem: Person | Workplace | undefined = useSelector(
    (state: RootState) => state.viewer.selectedItem
  );

  useEffect(() => {
    setTimeline(new CvTimeline(timelineRef.current as HTMLElement));
  }, []);

  useEffect(() => {
    timeline?.addItem({ id: '15', content: 'content', start: new Date() });
  }, [timeline]);

  return (
    <div className="timeline-app">
      <button
        onClick={() =>
          timeline?.addItem({ id: '12', content: 'btn', start: new Date() })
        }
      >
        add item
      </button>
      <button
        onClick={() => timeline?.addGroup({ id: '00', content: 'group' })}
      >
        button
      </button>
      <div id="timeline" ref={timelineRef} />
    </div>
  );
};

export default Timeline;
