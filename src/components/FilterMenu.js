import React, {useState} from 'react';


const FilterMenu = () => {
    const [inputValue, setInputValue] = useState('');
    const onChange = (e) => {
        setInputValue(e.target.value);
        console.log(`input on filter: ${e.target.value}`)
    }
    return (
        <div style={{padding: '5px'}}>
            <input value={inputValue} 
                placeholder='Sort by band'
                onChange={onChange}
                style={{width: '80%'}}/>
            <span>
                X
            </span>
        </div>
    )
}

export default FilterMenu;