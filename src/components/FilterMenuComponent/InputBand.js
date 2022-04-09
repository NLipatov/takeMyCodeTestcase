import React, {useState, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './input.css';

const element = <FontAwesomeIcon icon={faXmark} />

const InputBand = ({value, onChange}) => {

    return (
        <div style={{margin: '5px', backgroundColor: 'white', borderRadius: '4px', height: '38px', display: 'flex'}}>
            <input value={value} 
                placeholder='Sort by band'
                onChange={(e) => onChange(e.target.value)}
                style={{border: 'none', width: `100%`, borderRadius: '4px', height: '38px', padding: '10px'}}
                className='inputOnFilterMenu'
                />
            <span style={{fontSize: '19pt', cursor: 'pointer', display: `${value.length > 0 ? '' : 'none'}`, position: 'absolute', right: '10px'}}
            onClick={()=> onChange('')}>
                {element}         
            </span>
        </div>
    )
}

export default InputBand;