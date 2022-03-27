import React, {useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceTired } from '@fortawesome/free-solid-svg-icons'
import './ItemView.css';
import {useIntersectionRevealer} from 'react-intersection-revealer'

const ItemView = ({musiciansList, setDreamBand, dreamBand}) =>{
    const ref = useRef()
    const {heightVisible} = useIntersectionRevealer(ref)
    let displayParamForLoadingMore = 'flex';
    const [onVisibleFired, setOnVisibleFired] = useState(false);

    
    const onVisible = () => {
        setOnVisibleFired(true);
        console.log('onVisible');
    }

    
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
                <li
                key={i.id}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div
                         style={{display: 'flex', backgroundColor: dreamBand.filter(x=>x.id === i.id).length === 0 ? "grey" : "gold", transition: 'all 2s ease 0s'}}>
                            <div>
                                <img 
                                onClick={() =>{
                                    console.log(dreamBand);
                                }}
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
                        <button style={{height: '30px'}}
                            onClick={()=>{
                                if(dreamBand.filter(x=>x.id === i.id).length > 0){
                                    setDreamBand(dreamBand.filter(x=>x.id !== i.id));
                                }
                                else{
                                    setDreamBand([...dreamBand, i]);
                                }
                            }}>
                                <span>
                                    {dreamBand.filter(x=>x.id === i.id).length === 0 ? "Add To Dream Band" : "Delete From Dream Band"}
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
                    {listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px', paddingRight: '15px', marginBottom: '20px'}
                    }>
                    {items}
                    <div style={{display: `${displayParamForLoadingMore}`, justifyContent: 'center'}} className="need-to-track" ref={ref}>
                        <p>{heightVisible > 0 ? 'We are loading more musicians...' : null}</p>
                        {(heightVisible > 0 && onVisibleFired === false) ? onVisible() : null}
                    </div>
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