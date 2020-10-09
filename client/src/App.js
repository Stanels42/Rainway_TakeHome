import React from 'react';
import logo from './logo.svg';
import './App.css';

import Socket from './components/input/socket'
import InputController from './components/input/input'
import Display from './components/display/display'

function App() {
  return (
    <div className="App">
      <InputController/>
      <Display/>
    </div>
  );
}

export default App;
