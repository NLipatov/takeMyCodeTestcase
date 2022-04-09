import React, {useRef} from 'react';
import Select from 'react-select';


const SelectRole = ({options, selectedOption, changeSelect}) => {

    return(
        <>
            <Select 
                options={options}
                placeholder='Sort By Role'
                onChange={(e)=>{
                    console.log(e.value)
                    changeSelect(e.value)
                }}
                value={selectedOption}
                />
        </>
    )
}

export default SelectRole;