import React from "react";
import useDbMock from '../services/dbMock';

const ItemView = () =>{
    const musiciansList = useDbMock().getMusiciansList();
    
    const renderItems = ()=>{
        const items = musiciansList.map((i) => {
            return (
                <li>
                    <div style={{display: 'flex', flexDirection: 'column', marginBottom: '50px'}}>
                        <span>{i.name}</span>
                        <span>{i.lastName}</span>
                        <img src={i.picture} alt='musician picture' style={{maxWidth: '300px'}}/>
                    </div>
                    <div style={{height: '10px', width: '100vw', backgroundColor: '#1995AD'}}>

                    </div>
                </li>
            )
        })
        return items;
    }

    const items = renderItems();

    return (
        <div>
            <ul>
                {items}
            </ul>
        </div>
    )
}

export default ItemView;