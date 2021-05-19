
import './App.css';
import BookingsContainer from './containers/BookingsContainer'

import {useEffect, useState} from 'react';

function App() {
  return (
    <div className="App">
        <div className="logo">
          <img src="https://static.wikia.nocookie.net/fictionalcrossover/images/7/72/Fawlty_Towers_logo.png" alt="Fawlty Towers" />
        </div>
      <BookingsContainer/>
    </div>
  );
}

export default App;

