/** React, Redux */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

/** Reducers, actions */
import { RootState } from '../../store/reducers/rootReducer';
import { setActiveTab } from '../../store/actions/viewerActions';
import { toggleWorkModal } from '../../store/actions/modalActions';

/** Types */
import { ViewerTabs } from '../../store/reducers/viewerReducer';

/** Components */
import EmployeeViewer from './EmployeeViewer';
import WorkplaceViewer from './WorkplaceViewer';

/** Css, UI */
import { Button, Nav } from 'react-bootstrap';
import '../../styles/Viewer.css';

const Viewer: React.FC = () => {
  const dispatch = useDispatch();
  const activeTab: string = useSelector(
    (state: RootState) => state.viewer.activeTab
  );

  return (
    <div className="viewer">
      <Nav variant="tabs" defaultActiveKey={activeTab} className="control-bar">
        <Nav.Item className="control-bar-item">
          <Nav.Link
            eventKey="employees"
            onSelect={() => dispatch(setActiveTab('employees'))}
          >
            Employees
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="control-bar-item">
          <Nav.Link
            eventKey="workplaces"
            onSelect={() => dispatch(setActiveTab('workplaces'))}
          >
            Workplaces
          </Nav.Link>
        </Nav.Item>
        <Nav.Item
          className="control-bar-item"
          style={{ marginLeft: 'auto', paddingRight: '0.5em' }}
        >
          <Button
            variant={'danger'}
            onClick={() => dispatch(toggleWorkModal())}
          >
            Add place
          </Button>
        </Nav.Item>
      </Nav>

      {activeTab === 'employees' ? <EmployeeViewer /> : <WorkplaceViewer />}
    </div>
  );
};

export default Viewer;
