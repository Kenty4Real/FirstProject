import {useState} from 'react';
import { EXAMPLES } from './examples.js';
import Header from './components/Header.jsx';
import TabButton from './components/TabButtons.jsx';
import CoreConsepts from './components/CoreConsepts.jsx';
import Examples from './components/Examples.jsx';

function App() {

    
  return (
    <div>
      <Header />
      <main>
        <CoreConsepts/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;
