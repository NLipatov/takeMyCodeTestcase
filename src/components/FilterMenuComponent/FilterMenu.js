import React, {useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import InputBand from './InputBand';
import useDbMock from '../../services/dbMock';
import SelectRole from './Select/SelectRole';
import useRoleDefiner from './Select/RoleDefiner';

const FilterMenu = ({filterMusicianListByBand, setAppMusiciansList}) => {
    const musiciansList = useDbMock().getMusiciansList();

    const [roleFilter, setRoleFilter] = useState(undefined);
    const [bandFilter, setBandFilter] = useState(undefined);

    const [bandFiltered, setBandFiltered] = useState([]);
    const [roleFiltered, setRoleFiltered] = useState([]);

    let bandIds = [];
    let roleIds = [];
    
    const roles = useRoleDefiner(musiciansList);

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


    const FilterByBand = ({filterByBand, filterByRole}) => {
        let filtered = JSON.parse(JSON.stringify(musiciansList));
        let afterBand = []; 
        let afterRole = []; 

        let ignoreOldRoles = false;


        if(filterByBand !== undefined){
            console.log('band filter setting...');
            
            setBandFilter(filterByBand);
            setBandFiltered(filtered.filter(x=>x.band.toLowerCase() === filterByBand.toLowerCase()))
            afterBand = filtered.filter(x=>x.band.toLowerCase().includes(filterByBand.toLowerCase()));
            console.log(afterBand);
        }

        if(filterByRole !== undefined){
            console.log('role filter setting...');

            setRoleFilter(filterByRole);
            setRoleFiltered((filtered.filter(x=>x.role.toLowerCase() === filterByRole.toLowerCase())).filter(x=>x.role.length === filterByRole.length))
            afterRole = (filtered.filter(x=>x.role.toLowerCase() === filterByRole.toLowerCase())).filter(x=>x.role.length === filterByRole.length);
            console.log(afterRole);
        }
        else{
            ignoreOldRoles = true;
        }


        // console.log(bandFiltered);
        // console.log(roleFiltered);


        let bandCumulative = [...afterBand];
        let roleCumulative = [...afterRole];
        if(afterRole.length === 0){
            if(ignoreOldRoles){
                roleCumulative = []
            }
            else{
                roleCumulative = [...roleFiltered, ...afterRole]
            }
        }
        if(afterRole.length === 0){
            bandCumulative = [...bandFiltered, ...afterBand]
        }


        if(bandCumulative.length > 0 && roleCumulative.length > 0){
            filterMusicianListByBand(FindIntersect(bandCumulative, roleCumulative))
            return;
        }
        if(bandCumulative.length > 0){
            filterMusicianListByBand(bandCumulative)
            return
        }
        if(roleCumulative.length > 0){
            filterMusicianListByBand(roleCumulative)
            return
        }

        if(bandCumulative.length === 0 && roleCumulative.length === 0){
            filterMusicianListByBand(musiciansList);
        }
        

        // let intersectIds = bandIds.filter(x=>roleIds.includes(x));

        // console.log(intersectIds);
        
        

        // console.log(roleFilter, bandFilter)
        

        // console.log(filtered);


        // filterMusicianListByBand(filtered);

    }
    return (
        <>
            <InputBand FilterByBand={FilterByBand}/>
            <SelectRole roles={roles} FilterByBand={FilterByBand}/>
        </>
    )
}
export default FilterMenu;