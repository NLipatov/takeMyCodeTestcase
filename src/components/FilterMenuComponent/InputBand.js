import React, {useState, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './input.css';

const element = <FontAwesomeIcon icon={faXmark} />

const InputBand = ({setBandFilter, preInput}) => {
    const[displayParamForCross, setDisplayParamForCross] = useState('none');

    const onChange = (e) => {
        setBandFilter(e.target.value);
        ref.current.inputValue = e.target.value;
        if(e.target.value.length > 0){
            setDisplayParamForCross('');
        }
        else{
            setDisplayParamForCross('none');
        }
    }

    const ref = useRef({
        inputValue: preInput
    })
    console.log(`preInput: ${preInput}`)

    const onCross = () => {
        ref.current.inputValue = '';
        setDisplayParamForCross('none');
        setBandFilter(undefined);
    }
    return (
        <div style={{margin: '5px', backgroundColor: 'white', borderRadius: '4px', height: '38px', display: 'flex'}}>
            <input value={ref.current.inputValue} 
                placeholder='Sort by band'
                onChange={onChange}
                style={{border: 'none', width: `100%`, borderRadius: '4px', height: '38px', padding: '10px'}}
                className='inputOnFilterMenu'
                />
            <span style={{fontSize: '19pt', cursor: 'pointer', display: `${displayParamForCross}`, position: 'absolute', right: '10px'}}
                onClick={onCross}>
                {element}         
            </span>
        </div>
    )
}

export default InputBand;