import React from 'react';
import Select from 'react-select';


const SelectRole = ({options, selectedOption, changeSelect}) => {

    return(
        <>
            <Select 
                options={options}
                placeholder='Sort By Role'
                onChange={(e)=>{
                    changeSelect(e.value)
                }}
                value={options.find(x=>x.value === selectedOption)}
                />
        </>
    )
}

export default SelectRole;