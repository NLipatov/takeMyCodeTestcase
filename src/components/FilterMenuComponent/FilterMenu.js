import React, {useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import InputBand from './InputBand';
import useDbMock from '../../services/dbMock';
import SelectRole from './Select/SelectRole';
import useRoleDefiner from './Select/RoleDefiner';
import './FilterMenu.css';



const FilterMenu = ({setMusicianList, setAppMusiciansList}) => {
    const musiciansList = useDbMock().getMusiciansList();

    const [roleFilter, setRoleFilter] = useState('');
    const [bandFilter, setBandFilter] = useState('');

    
    const roles = useRoleDefiner(musiciansList);

    let storedFilters = {
        preInput: bandFilter,
        preSelect: roleFilter,
    }

    const getStoredFilters = () => {
        // console.log(roleFilter.value)
        const storedValue = localStorage.getItem('storedFilter');
        
        if(storedValue !== null){
            storedFilters = JSON.parse(localStorage.getItem('storedFilter'));
            setBandFilter(storedFilters.preInput);
            setRoleFilter(storedFilters.preSelect);
            console.log(storedFilters.preSelect)
        }
    } 
    

    const checkIfUserHasSavedFilters = (obj) => {
        return Object.keys(obj).length > 0;
    }

    if(checkIfUserHasSavedFilters(storedFilters)){
        console.log('savedFilters detected!')
    }
    else{
        console.log('user doesnt have any stored filters')
    }


    const saveFilters = (obj) => {
        localStorage.setItem('storedFilter', JSON.stringify(obj));
    }

    useEffect(() =>{
        setAppMusiciansList(musiciansList);
        console.log('setted applist')
    }, [])

    let intersect = [];

    const FindIntersect = (array1, array2) =>{
        intersect = [];
        array1.map(a => {
            array2.map(b => {
                if(a.id === b.id){
                    intersect.push(b);
                }
            })
            
        })
        return(intersect);

    }


    const setAppMusicianList = () => {
        let filtered = JSON.parse(JSON.stringify(musiciansList));
        if(roleFilter !== ''){
            filtered = filtered.filter(x=>x.role === roleFilter)
        }
        if(bandFilter !== ''){
            filtered = filtered.filter(x=>x.band.toLowerCase().includes(bandFilter.toLowerCase()))
        }
        setMusicianList(filtered);

    }

    const options = [{value: '', label: 'All Roles'}]
    roles.map(i => {
        return options.push(
            {
                value: i, label: `${i.charAt(0).toUpperCase()}${i.slice(1)}`,
            }
        )
    })

    return (
        <>
            <InputBand value={storedFilters.preInput} onChange={setBandFilter}/>
            <SelectRole selectedOption={storedFilters.preSelect} options={options} changeSelect={setRoleFilter}/>
            <div style={{margin: '5px'}}>
                <button
                className="applyFiltersButton"
                style={{height: '38px', width: '100%', borderRadius: '4px'}}
                 onClick={()=>{
                    console.log(bandFilter, roleFilter);
                    setAppMusicianList();
                }}>
                    Apply Filters
                </button>
                <button
                style={{height: '38px', width: '100%', borderRadius: '4px'}}
                onClick={()=>{
                    saveFilters(storedFilters);
                }}>
                    Save Filters
                </button>
                <button
                style={{height: '38px', width: '100%', borderRadius: '4px'}}
                    onClick={getStoredFilters}>
                    Load Filters
                </button>
            </div>

        </>
    )
}
export default FilterMenu;