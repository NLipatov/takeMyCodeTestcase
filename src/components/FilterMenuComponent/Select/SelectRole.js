import React from 'react';
import Select from 'react-select'


const SelectRole = ({roles, FilterByBand}) => {
    const options = [{value: 'none', label: '-'}]
    roles.map(i => {
        return options.push(
            {
                value: i, label: `${i.charAt(0).toUpperCase()}${i.slice(1)}`
            }
        )
    })

    console.log(options)
    

    return(
        <>
            <Select 
                options={options}
                placeholder='Sort By Role'
                onChange={(e)=>{
                    FilterByBand();
                }}/>
        </>
    )
}

export default SelectRole;