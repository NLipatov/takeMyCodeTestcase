import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceTired } from '@fortawesome/free-solid-svg-icons'
import './ItemView.css';

const ItemView = ({musiciansList}) =>{
    if(musiciansList === undefined){
        return(
            <h3>
                Nothing was in musiciansList
            </h3>
        )
    }
    const renderItems = ()=>{
        const items = musiciansList.map((i) => {
            return (
                <li key={i.id}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{display: 'flex', backgroundColor: 'grey'}}>
                            <div>
                                <img 
                                src={i.picture} 
                                alt={`${i.name} ${i.lastName}`} 
                                style={
                                    {
                                    height: '150px',
                                    width: '150px',
                                    borderRadius: '255px',
                                    padding: '10px',
                                    objectFit: 'cover'
                                }}/>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column', padding: '10px'}}>
                                <span className="nameAndLastName">
                                    {i.name} {i.lastName}
                                </span>
                                <span className="roleAndBand">
                                    {i.role} at {i.band}
                                </span>
                            </div>
                        </div>
                        <button style={{height: '30px'}}>
                                <span>
                                    Add To Dream Band
                                </span>
                        </button>
                    </div>

                </li>
            )
        })
        return items;
    }

    const items = renderItems();

    if(musiciansList.length > 0) {
        return (
            <div>
                <ul style={
                    {listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px', paddingRight: '15px', marginBottom: '0'}
                    }>
                    {items}
                </ul>
            </div>
        )
    }
    else{
        return(
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '10px'}}>
                <span style={{fontSize: '60pt'}}>
                    <FontAwesomeIcon icon={faFaceTired}/>
                </span>
                <span style={{fontSize: '11pt'}}>
                    Sorry
                </span>
                <h3 style={{fontSize: '11pt'}}>
                    There's nothing we can find by your request
                </h3>
            </div>
        )
    }

}

export default ItemView;