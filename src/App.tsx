import React from 'react';

import { Homepage } from './components/Homepage';
import { Header } from './components/Header';
import { MapComponent } from './components/MapComponent';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div id="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/map">
            <MapComponent />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
