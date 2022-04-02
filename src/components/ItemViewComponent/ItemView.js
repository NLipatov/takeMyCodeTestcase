import React, {useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceTired } from '@fortawesome/free-solid-svg-icons'
import useDbMock from '../../services/dbMock';
import './ItemView.css';


const ItemView = ({filtersApplied, musiciansList, setDreamBand, dreamBand}) =>{
    const {getMusiciansList} = useDbMock();
    const [currentList, setCurrentList] = useState([]);

    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(5);
    const [wholeListloaded, setWholeListloaded] = useState(false);

    const mockRequest = (offset) => {
        return new Promise((resolve, reject) =>{
            setTimeout(() =>{
                resolve(getMusiciansList().slice(0, offset))
            }, 1200)
        });
    }


    mockRequest(offset).then(e => 
        {
            if(loading){
                setLoading(false);
                console.log('mockRequest');
                setCurrentList(e);
                setOffset(offset + 5)
            }
        }
    )

    useEffect(() =>{
        if(currentList.length === getMusiciansList().length){
            console.log('REMOVING event listener');
            setWholeListloaded(true);
        }
        else{
            document.addEventListener('scroll', scrollHandler)
        }

        console.log(`current list len: ${currentList.length}`)
        console.log(`current offset: ${offset}`)
        if(currentList.length === 0){
            setLoading(true);
        }
    }, [currentList.length])


    const scrollHandler = (e) => {
        console.log(`offset height: ${document.getElementsByClassName("listOfMusicians")[0].offsetHeight}`)
        console.log(`offset height: ${e.target.documentElement.scrollTop}`)
        if((document.getElementsByClassName("listOfMusicians")[0].offsetHeight - 532) - e.target.documentElement.scrollTop < 0){

            console.log('end');
            setLoading(true);
            document.removeEventListener('scroll', scrollHandler);
        }
        
    }
    
    
    const renderItems = (arr)=>{
        const items = arr.map((i) => {
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

    const loadingSpan = () => {
        return(
            <div style={{marginTop: '-20px'}}>
                <span>
                    {currentList.length === 0 ? "Loading musicians..." : "Loading more..."}
                </span>
            </div>
        )
    }


    if(!filtersApplied) {
        return (
            <div>
                <ul className="listOfMusicians"
                style={
                    {listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px', paddingRight: '15px', marginBottom: '20px'}
                    }>
                    {currentList.length > 0 ? renderItems(currentList) : null}
                </ul>
                {(loading && !wholeListloaded) ? loadingSpan() : null}
            </div>
        )
    }
    else{
        return (
            <div>
                <ul className="listOfMusicians"
                style={
                    {listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px', paddingRight: '15px', marginBottom: '20px'}
                    }>
                    {musiciansList.length > 0 ? renderItems(musiciansList) : null}
                </ul>
            </div>
        )
        // return(
        //     <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '10px'}}>
        //         <span style={{fontSize: '60pt'}}>
        //             <FontAwesomeIcon icon={faFaceTired}/>
        //         </span>
        //         <span style={{fontSize: '11pt'}}>
        //             Sorry
        //         </span>
        //         <h3 style={{fontSize: '11pt'}}>
        //             There's nothing we can find by your request
        //         </h3>
        //     </div>
        // )
    }
}

export default ItemView;