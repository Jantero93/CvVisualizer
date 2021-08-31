import React from 'react';

import Homepage from './components/Homepage';
import Header from './components/Header';
import MapComponent from './components/MapComponent';
import Timeline from './components/Timeline';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
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
