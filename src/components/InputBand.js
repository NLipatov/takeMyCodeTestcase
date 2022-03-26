import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faXmark} />

const InputBand = ({FilterByBand}) => {
    const [inputValue, setInputValue] = useState('');
    const[displayParamForCross, setDisplayParamForCross] = useState('none');
    let inputWidth = '100%';
    if(displayParamForCross !== 'none'){
        inputWidth = '90%';
    }
    else{
        inputWidth = '100%';
    }
    const onChange = (e) => {
        FilterByBand(e.target.value);
        setInputValue(e.target.value);
        if(e.target.value.length > 0){
            setDisplayParamForCross('');
        }
        else{
            setDisplayParamForCross('none');
        }
    }
    const onCross = () => {
        setInputValue('');
        setDisplayParamForCross('none');
    }
    return (
        <div style={{margin: '5px', backgroundColor: 'white'}}>
            <input value={inputValue} 
                placeholder='Sort by band'
                onChange={onChange}
                style={{border: 'none', width: `${inputWidth}`, outline: 'none'}}
                />
            <span style={{fontsize: '14pt', cursor: 'pointer', display: `${displayParamForCross}`}}
                onClick={onCross}>
                {element}         
            </span>
            
        </div>
    )
}

export default InputBand;