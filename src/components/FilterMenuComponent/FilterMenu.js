import React, {useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import InputBand from './InputBand';
import useDbMock from '../../services/dbMock';
import SelectRole from './Select/SelectRole';
import useRoleDefiner from './Select/RoleDefiner';

const FilterMenu = ({filterMusicianListByBand, setAppMusiciansList}) => {
    const musiciansList = useDbMock().getMusiciansList();
    
    const roles = useRoleDefiner(musiciansList);

    useEffect(() =>{
        setAppMusiciansList(musiciansList);
        console.log('setted applist')
    }, [])
    const FilterByBand = ({filterByBand, filterByRole}) => {
        if(filterByBand){
            filterMusicianListByBand(musiciansList.filter(x=>x.band.toLowerCase().includes(filterByBand.toLowerCase())));
        }
    }
    return (
        <>
            <InputBand FilterByBand={FilterByBand}/>
            <SelectRole roles={roles} FilterByBand={FilterByBand}/>
        </>
    )
}
export default FilterMenu;