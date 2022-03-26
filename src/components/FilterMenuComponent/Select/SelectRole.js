import React from 'react';
import Select from 'react-select'


const SelectRole = ({roles}) => {
    const options = [{value: 'none', label: '-'}]
    roles.map(i =>{
        options.push(
            {
                value: i.toLowerCase(), label: `${i.charAt(0).toUpperCase()}${i.slice(1)}`
            }
        )
    })

    console.log(options)
    

    return(
        <>
            <Select options={options}/>
        </>
    )
}

export default SelectRole;