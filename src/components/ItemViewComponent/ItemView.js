import React, {useRef, useState, useEffect } from "react";
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

        if(currentList.length === getMusiciansList().length){
            setWholeListloaded(true);
        }
        else{
            if(currentList.length > 0 && ref.current.scrollListenerAdded === false){
                document.addEventListener('scroll', scrollHandler)
                ref.current.scrollListenerAdded = true;
            }

        }

        if(currentList.length === 0){
            setLoading(true);
        }
    }, [currentList.length])


    const scrollHandler = (e) => {
        if((ref.current.offsetHeight - ref.current.musiciansListHeight) < e.target.documentElement.scrollTop - ref.current.scrollTopMargin){
            ref.current.scrollTopMargin += 950;
            setLoading(true);
        }
        if(e.target.documentElement.scrollTop > 300){
            document.querySelector(".filterMenu").style.transform = "translate(0px, -290px)";
        }
        else{
            document.querySelector(".filterMenu").style.transform = "translate(0px, 0px)";
        }
        
    }
    
    
    const renderItems = (arr)=>{
        const items = arr.map((i) => {
            return (
                <li
                key={i.id}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div
                            style={{display: 'flex', backgroundColor: dreamBand.filter(x=>x.id === i.id).length === 0 ? "grey" : "gold", transition: 'all 2s ease 0s', borderTopLeftRadius: '25px'}}>
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
                        <button style={{height: '30px', borderBottomRightRadius: '25px'}}
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
            <div style={{marginTop: '-20px', color: 'white'}}>
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
    }
}

export default ItemView;