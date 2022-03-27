import { faL } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Select from 'react-select'


const SelectRole = ({roles, FilterByBand, resetSelectRole}) => {
    const options = [{value: undefined, label: 'All Roles'}]
    roles.map(i => {
        return options.push(
            {
                value: i, label: `${i.charAt(0).toUpperCase()}${i.slice(1)}`
            }
        )
    })
    

    return(
        <>
            <Select 
                options={options}
                placeholder='Sort By Role'
                onChange={(e)=>{
                    FilterByBand({filterByRole: e.value});
                }}/>
        </>
    )
}

export default SelectRole;