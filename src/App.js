import React, {useState, useEffect} from 'react';
import ItemView from './components/ItemViewComponent/ItemView';
import CarouselComponent from './components/CarouselComponent';
import FilterMenu from './components/FilterMenuComponent/FilterMenu';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [appMusiciansList, setAppMusiciansList] = useState([]);
  const [dreamBand, setDreamBand] = useState([]);


  const setMusicianList = (newList)=>{
    setAppMusiciansList(newList);
  }
  useEffect(()=>{
  }, []);
  return (
    <div className="main">
      
      <div className="header">
        <CarouselComponent/>
      </div>
      <div className="contentBlock">
        <div className="filterMenu">
          <FilterMenu setMusicianList={setMusicianList} setAppMusiciansList={setAppMusiciansList}/>
        </div>
        <div
        className="items">
          <ItemView musiciansList={appMusiciansList} setDreamBand={setDreamBand} dreamBand={dreamBand}/>
        </div>
      </div>

    </div>
  );
}

export default App;
