import React from 'react';
import Select from 'react-select'


const SelectRole = ({roles, setRoleFilter}) => {
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
                    setRoleFilter(e.value);
                }}/>
        </>
    )
}

export default SelectRole;