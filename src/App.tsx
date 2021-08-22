import React from 'react';

import { Homepage } from './components/Homepage';
import { Header } from './components/Header';
import { MapComponent } from './components/MapComponent';
import { Timeline } from './components/Timeline';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FunctionComponent } from 'react';
import { useState } from 'react';

import { Person, Workplace } from './types/types'

const App: FunctionComponent = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [workplaces, setWorkplaces] = useState<Workplace[]>([]);

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
