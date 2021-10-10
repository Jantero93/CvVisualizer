/** React */
import React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/** Reducers, actions */
import { RootState } from '../store/reducers/rootReducer';
import { toggleWorkExperienceModal } from '../store/actions/modalActions';

/** Components */
import WorkExperienceModal from './modals/WorkExperienceModal';

/** Timeline */
import CvTimeline from './non-client/CvTimeline';

/** Types */
import { Person, WorkExperience, Workplace } from '../types/types';
import { DataItem, DataGroup } from 'vis-timeline';

/** CSS, UI */
import 'vis-timeline/styles/vis-timeline-graph2d.css';
import { Button } from 'react-bootstrap';

const Timeline: React.FC = () => {
  const [timeline, setTimeline] = useState<CvTimeline>();
  const timelineRef = useRef<HTMLDivElement>(null);

  const viewerItem: Person | Workplace | undefined = useSelector(
    (state: RootState) => state.viewer.selectedItem
  );
  const showExperienceModal: boolean = useSelector(
    (state: RootState) => state.modal.showWorkExperienceModal
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeline(new CvTimeline(timelineRef.current as HTMLElement));
  }, []);

  const setPersonTimeline = useCallback(() => {
    const timelineFormat: DataItem[] | undefined = (
      viewerItem as Person
    ).workExperience?.map((work: WorkExperience) => {
      return { start: work.beginTime, content: work.title };
    });

    timelineFormat && timeline?.setData(timelineFormat);
  }, [timeline, viewerItem]);

  const setWorkplaceTimeline = useCallback(() => {
    const groups: DataGroup[] | undefined = (
      viewerItem as Workplace
    ).workExperiences?.map((exp: WorkExperience) => {
      return {
        content: exp.username,
        id: exp.username
      };
    });

    const items: DataItem[] | undefined = (
      viewerItem as Workplace
    ).workExperiences?.map((exp: WorkExperience) => {
      return {
        content: exp.title,
        start: exp.beginTime,
        group: exp.username
      };
    });

    items && groups && timeline?.setData(items, groups);
  }, [timeline, viewerItem]);

  useEffect(() => {
    /** Check is employee or workplace selected, put
     *  content in timeline
     */
    if (viewerItem) {
      'education' in viewerItem ? setPersonTimeline() : setWorkplaceTimeline();
    }
  }, [setPersonTimeline, setWorkplaceTimeline, viewerItem]);

  return (
    <div className="timeline-app">
      <Button
        onClick={() => dispatch(toggleWorkExperienceModal())}
        variant={'danger'}
      >
        Add Experince
      </Button>
      <div id="timeline" ref={timelineRef} />
      {showExperienceModal && <WorkExperienceModal />}
    </div>
  );
};

export default Timeline;
