import React from "react";
import useDbMock from '../services/dbMock';

const ItemView = () =>{
    const musiciansList = useDbMock().getMusiciansList();
    
    const renderItems = ()=>{
        const items = musiciansList.map((i) => {
            return (
                <li key={i.id}>
                    <div style={{display: 'flex'}}>
                        <div>
                            <img src={i.picture} alt={`${i.name} ${i.lastName}`} style={{maxWidth: '250px'}}/>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <span>
                                {i.name} {i.lastName}
                            </span>
                            <span>
                                {i.role} at {i.band}
                            </span>
                        </div>

                    </div>
                </li>
            )
        })
        return items;
    }

    const items = renderItems();

    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {items}
            </ul>
        </div>
    )
}

export default ItemView;