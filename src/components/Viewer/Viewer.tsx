/** React */
import React, { useState } from 'react';

/** Components */
import EmployeeViewer from './EmployeeViewer';
import WorkplaceViewer from './WorkplaceViewer';

/** Css, UI */
import { Tab, Tabs } from 'react-bootstrap';

const Viewer: React.FC = () => {
  const [key, setKey] = useState<string>('employees');

  return (
    <Tabs
      activeKey={key}
      className="tabs-header"
      transition={false}
      onSelect={(tabKey) => setKey(tabKey as string)}
    >
      <Tab eventKey="employees" title="Employees" tabClassName="tab">
        <EmployeeViewer />
      </Tab>
      <Tab eventKey="workplaces" title="Workplaces" tabClassName="tab">
        <WorkplaceViewer />
      </Tab>
    </Tabs>
  );
};

export default Viewer;
