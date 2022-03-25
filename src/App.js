import React from 'react';
import ItemView from './components/ItemView';
import CarouselComponent from './components/CarouselComponent';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // <ItemView/>
    <div className="main">
      
      <div className="header">
        <CarouselComponent/>
      </div>
      <div className="contentBlock">
        <div className="filterMenu">

        </div>
        <div className="items">
          <ItemView/>
        </div>
      </div>

    </div>
  );
}

export default App;
