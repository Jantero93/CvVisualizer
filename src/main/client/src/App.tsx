/** React, Router */
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/** Redux, States, Actions */
import { useDispatch } from 'react-redux';
import { setWorkPlaces } from './store/actions/mainDataActions';

/** Components */
import Header from './components/Header';
import Homepage from './components/Homepage';
import MapComponent from './components/MapComponent';
import Timeline from './components/Timeline';

/** Services */
import WorkplaceService from './services/WorkplaceService';

/** Css */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/** Types */
import { Workplace } from './types/types';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeDataFetch = async () => {
      const response: Workplace[] = await WorkplaceService.getAll();
      dispatch(setWorkPlaces(response));
    };

    initializeDataFetch();
  });

  return (
    <div id="App">
      <Router>
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/map">
              <MapComponent />
            </Route>
            <Route path="/timeline">
              <Timeline />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
