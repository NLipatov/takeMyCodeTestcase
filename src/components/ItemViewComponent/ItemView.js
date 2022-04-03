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

    const ref = useRef({
        musiciansListHeight: 0,
        offsetHeight: 0,
        scrollTopMargin: 10,
        scrollListenerAdded: false
    });


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
        ref.current.musiciansListHeight = document.querySelector(".listOfMusicians").offsetHeight;
        ref.current.offsetHeight = document.querySelector("body").offsetHeight;
        console.log(`effect musician height: ${ref.current.musiciansListHeight}`)

        if(currentList.length === getMusiciansList().length){
            console.log('REMOVING event listener');
            setWholeListloaded(true);
        }
        else{
            if(currentList.length > 0 && ref.current.scrollListenerAdded === false){
                console.log('adding event listener');
                document.addEventListener('scroll', scrollHandler)
                ref.current.scrollListenerAdded = true;
            }

        }

        console.log(`current list len: ${currentList.length}`)
        console.log(`current offset: ${offset}`)
        if(currentList.length === 0){
            setLoading(true);
        }
    }, [currentList.length])


    const scrollHandler = (e) => {
        // //Высота окна пользователя
        // console.log(`offset height: ${e.target.documentElement.offsetHeight}`)
        // //Высота элемента с музыкантами
        // console.log(`element height: ${document.getElementsByClassName("listOfMusicians")[0].offsetHeight}`)
        // //Проскролленая высота
        // console.log(`scrolled: ${e.target.documentElement.scrollTop}`)
        // // console.log(`ScrollTop: ${e.target.documentElement.scrollTop}`)
        // // console.log(`ClientHeight: ${document.ClientHeight}`)
        // console.log(`difference: ${(e.target.documentElement.offsetHeight - document.getElementsByClassName("listOfMusicians")[0].offsetHeight)}`)
        // console.log(`scrollTop: ${e.target.documentElement.scrollTop}`)
        console.log(`handler got: Difference: ${ref.current.offsetHeight - ref.current.musiciansListHeight}, scroll With margin: ${e.target.documentElement.scrollTop - ref.current.scrollTopMargin}`)
        // console.log(`scrollHandler difference: ${e.target.documentElement.offsetHeight - ref.current.musiciansListHeight}`)
        console.log(`scrollTop: ${e.target.documentElement.scrollTop}`)
        if((ref.current.offsetHeight - ref.current.musiciansListHeight) < e.target.documentElement.scrollTop - ref.current.scrollTopMargin){
            console.log('end');
            ref.current.scrollTopMargin += 950;
            console.log(`scroll margin update: ${ref.current.scrollTopMargin}`)
            setLoading(true);
            
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