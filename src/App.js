import React, {useState, useEffect} from 'react';
import ItemView from './components/ItemViewComponent/ItemView';
import CarouselComponent from './components/CarouselComponent';
import FilterMenu from './components/FilterMenu';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [appMusiciansList, setAppMusiciansList] = useState([]);
  const [dreamBand, setDreamBand] = useState([]);

  const shouldBeInADreamBand = (persone, bool) => {
    if(bool){
      dreamBand.push(persone);
    }
    else{
      let newArray = dreamBand.filter(member => member.id !== persone.id);
      setDreamBand(newArray);
    }
  }

  const filterMusicianListByBand = (newList)=>{
    setAppMusiciansList(newList);
    console.log(appMusiciansList);
  }
  // useEffect(()=>{
  //   console.log('updatedMusicianList');
  //   console.log(appMusiciansList);
  // }, [appMusiciansList]);
  return (
    <div className="main">
      
      <div className="header">
        <CarouselComponent/>
      </div>
      <div className="contentBlock">
        <div className="filterMenu">
          <FilterMenu filterMusicianListByBand={filterMusicianListByBand} setAppMusiciansList={setAppMusiciansList}/>
        </div>
        <div className="items">
          <ItemView musiciansList={appMusiciansList} dreamBand={dreamBand} shouldBeInADreamBand={shouldBeInADreamBand}/>
        </div>
      </div>

    </div>
  );
}

export default App;
