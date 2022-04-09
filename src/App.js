import React, {useState, useEffect} from 'react';
import ItemView from './components/ItemViewComponent/ItemView';
import CarouselComponent from './components/CarouselComponent';
import FilterMenu from './components/FilterMenuComponent/FilterMenu';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [appMusiciansList, setAppMusiciansList] = useState([]);
  const [dreamBand, setDreamBand] = useState([]);
  const [filtersApplied, setFiltersApplied] = useState(false);


  const setMusicianList = (newList)=>{
    setAppMusiciansList(newList);
    setFiltersApplied(true);
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
          <ItemView filtersApplied={filtersApplied} musiciansList={appMusiciansList} setDreamBand={setDreamBand} dreamBand={dreamBand}/>
        </div>
      </div>

      <div class="noFiltersSaved" style={{
      display: 'flex', 
      height: '60px', 
      width: '150px', 
      position: 'absolute', 
      backgroundColor: 'rgba(100, 0, 20, 0.8)',
      transition: 'all 1s ease 0s', 
      transform: 'translate(0px, 55vh)',
      color: 'white',
      margin: '10px',
      left: '0',
      top: '0',
      marginLeft: '-200px'}}>
        <span style={{margin: 'auto'}}>
          No filters saved
        </span>
      </div>
    </div>
  );
}

export default App;
