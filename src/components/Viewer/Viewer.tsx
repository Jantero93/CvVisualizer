/** React, Redux */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

/** Reducers, actions */
import { RootState } from '../../store/reducers/rootReducer';
import { setActiveTab } from '../../store/actions/viewerActions';

/** Types */
import { ViewerTabs } from '../../store/reducers/viewerReducer';

/** Components */
import EmployeeViewer from './EmployeeViewer';
import WorkplaceViewer from './WorkplaceViewer';

/** Css, UI */
import { Nav, Tab, Tabs } from 'react-bootstrap';

const Viewer: React.FC = () => {
  const activeTab: string = useSelector(
    (state: RootState) => state.viewer.activeTab
  );
  const dispatch = useDispatch();

  return (
    // https://react-bootstrap.github.io/components/navs/
    <div className="viewer">
      <Tabs
        activeKey={activeTab}
        className="tabs-header"
        transition={false}
        onSelect={(tabName) => dispatch(setActiveTab(tabName as ViewerTabs))}
      >
        <Tab eventKey="employees" title="Employees" tabClassName="tab">
          <EmployeeViewer />
        </Tab>
        <Tab eventKey="workplaces" title="Workplaces" tabClassName="tab">
          <WorkplaceViewer />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Viewer;
