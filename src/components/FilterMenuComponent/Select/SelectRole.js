import React, {useRef, useEffect} from 'react';
import Select from 'react-select';


const SelectRole = ({options, selectedOption, changeSelect}) => {
    useEffect(()=>{
        console.log('effect on select component');
        console.log(selectedOption)
    }, [selectedOption])

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