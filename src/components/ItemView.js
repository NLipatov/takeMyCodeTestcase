import React from "react";
import useDbMock from '../services/dbMock';

const ItemView = () =>{
    const musiciansList = useDbMock().getMusiciansList();
    
    const renderItems = ()=>{
        const items = musiciansList.map((i) => {
            return (
                <li>
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
                    {/* <div style={{display: 'flex', flexDirection: 'column', marginBottom: '50px'}}>
                        <span>{i.name}</span>
                        <span>{i.lastName}</span>
                        <img src={i.picture} alt='musician picture' style={{maxWidth: '300px'}}/>
                    </div> */}
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