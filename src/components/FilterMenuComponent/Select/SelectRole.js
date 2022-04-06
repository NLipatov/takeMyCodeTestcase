import React, {useRef} from 'react';
import Select from 'react-select';


const SelectRole = ({roles, setRoleFilter, preSelected}) => {

    // console.log(`preselected value: ${preSelected}`)


    const options = [{value: undefined, label: 'All Roles'}]
    roles.map(i => {
        return options.push(
            {
                value: i, label: `${i.charAt(0).toUpperCase()}${i.slice(1)}`,
            }
        )
    })

    const ref = useRef({
        selected: (preSelected === undefined) ? options[0] : preSelected,
    });

    const setSelected = (roleValue) =>{
        ref.current.selected = options.filter(x=>x.value === roleValue);
    }
    

    return(
        <>
            <Select 
                options={options}
                placeholder='Sort By Role'
                onChange={(e)=>{
                    setRoleFilter(e.value);
                    setSelected(e.value);
                }}
                // isOptionSelected={(x)=>x.value === 'frontman'}
                value={ref.current.selected}
                />
        </>
    )
}

export default SelectRole;