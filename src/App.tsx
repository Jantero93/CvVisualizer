import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { MapComponent } from './components/MapComponent';
import { Header } from './components/Header';
import './App.css';


function App() {
  return (
    <div id="App">
      <Header />
      <MapComponent />
    </div>
  );
}

export default App;
