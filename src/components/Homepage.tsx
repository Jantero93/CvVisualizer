/** React, Redux */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

/** Reducers, actions */
import { mapSizeHasChanged } from '../store/actions/mapActions';

/** Components */
import MapComponent from './MapComponent';
import Split from 'split.js';
import Timeline from './Timeline';

/** Css */
import '../styles/Homepage.css';

const Homepage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    Split(['#split-row-top', '#split-row-bottom'], {
      direction: 'vertical',
      onDrag: () => dispatch(mapSizeHasChanged(true)),
      onDragEnd: () => dispatch(mapSizeHasChanged(true))
    });

    Split(['#split-col-left', '#split-col-right'], {});
  }, [dispatch]);

  return (
    <div className="home-page">
      <div className="main-split">
        <div id="split-row-top">
          <MapComponent />
        </div>
        <div id="split-row-bottom">
          <div className="split-nested">
            <div id="split-col-left">
              <div style={{ border: '1px solid' }}>
                Tähän tulee viewer <br /> asd
              </div>
            </div>
            <div id="split-col-right">
              <Timeline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
