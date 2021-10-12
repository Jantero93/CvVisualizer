/** React, Router */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/** Components */
import Header from './components/Header';
import Homepage from './components/Homepage';
import MapComponent from './components/MapComponent';
import Timeline from './components/Timeline';

/** Css */
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
