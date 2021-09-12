/** React */
import React from 'react';
import { useEffect, useRef, useState } from 'react';

/** Timeline */
import CvTimeline from './non-client/CvTimeline';

import 'vis-timeline/styles/vis-timeline-graph2d.css';

const Timeline: React.FC = () => {
  const [timeline, setTimeline] = useState<CvTimeline>();
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeline(new CvTimeline(timelineRef.current as HTMLElement));
  }, []);

  return <div id="timeline" ref={timelineRef} />;
};

export default Timeline;
