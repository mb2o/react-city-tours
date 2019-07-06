import React, { Fragment } from 'react';

import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList';

import './App.scss';

function App() {
  return (
    <Fragment>
      <Navbar />
      <h1>Our current app</h1>
      <TourList />
    </Fragment>
  );
}

export default App;
