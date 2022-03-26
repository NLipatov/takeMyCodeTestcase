import React, {useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import InputBand from './InputBand';
import useDbMock from '../services/dbMock';


const FilterMenu = ({filterMusicianListByBand, setAppMusiciansList}) => {
    const musiciansList = useDbMock().getMusiciansList();
    useEffect(() =>{
        setAppMusiciansList(musiciansList);
        console.log('setted applist')
    }, [])
    const FilterByBand = (inputParams) => {
        filterMusicianListByBand(musiciansList.filter(x=>x.band.toLowerCase().includes(inputParams.toLowerCase())));
    }
    return (
        <>
            <InputBand FilterByBand={FilterByBand}/>
        </>
    )
}
export default FilterMenu;