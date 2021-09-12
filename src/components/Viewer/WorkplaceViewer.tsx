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
import '../../styles/WorkplaceViewer.css';

const WorkplaceViewer: React.FC = () => {
  const dispatch = useDispatch();

  const workplaces: Workplace[] = useSelector(
    (state: RootState) => state.mainData.workplaces
  );

  const selectedItem: Person | Workplace | undefined = useSelector(
    (state: RootState) => state.viewer.selectedItem
  );

  return (
    <Table hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Size</th>
        </tr>
      </thead>
      <tbody>
        {workplaces.map((place: Workplace) => (
          <tr
            key={place.id}
            style={selectedItem === place ? { backgroundColor: '#dc3545' } : {}}
            onClick={() => dispatch(setSelectedItem(place))}
          >
            <td>{place.name}</td>
            <td>{place.address}</td>
            <td>{place.size}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default WorkplaceViewer;
