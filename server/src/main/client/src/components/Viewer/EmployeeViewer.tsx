/** React */
import React from 'react';

/** Reducers, actions */
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/rootReducer';
import { setSelectedItem } from '../../store/actions/viewerActions';

/** Types */
import { Person, Workplace } from '../../types/types';

/** CSS, Ui */
import { Table } from 'react-bootstrap';

const EmployeeViewer: React.FC = () => {
  const dispatch = useDispatch();

  const persons: Person[] = useSelector(
    (state: RootState) => state.mainData.persons
  );

  const selectedItem: Person | Workplace | undefined = useSelector(
    (state: RootState) => state.viewer.selectedItem
  );

  return (
    <Table hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Education</th>
          <th>Work experiences</th>
        </tr>
      </thead>
      <tbody>
        {persons.map((person: Person) => (
          <tr
            key={person.id}
            onClick={() => dispatch(setSelectedItem(person))}
            style={
              'username' in person && selectedItem === person
                ? { backgroundColor: '#dc3545' }
                : {}
            }
          >
            <td>{person.name}</td>
            <td>{person.education}</td>
            <td>{person.workExperience?.length}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default EmployeeViewer;
