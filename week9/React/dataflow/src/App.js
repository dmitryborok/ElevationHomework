import './App.css';
import SpotCheck from './components/SpotCheck';
import Exercise1 from './components/Exercise1';
import Exercise2 from './components/Exercise2';
import { useState } from 'react';

function App() {
  return (
    <div className="ex-space">
      <h4 className='ex-title'>React Data Flow</h4>
      <div className="exercise" id="SpotCheck">
          <h5>Spotcheck</h5>
          <SpotCheck/>
      </div>
      <div className="exercise" id="Exercise1">
          <h5>Exercise 1</h5>
          <Exercise1/>
      </div>
      <div className="exercise" id="Exercise2">
          <h5>Exercise 2</h5>
          <Exercise2/>
      </div>
    </div>
  )
}

export default App;
