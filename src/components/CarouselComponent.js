import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
    return (
    <Carousel title="Our Partners">
        <Carousel.Item>
            <img
            style={{width: '100vw', height: '200px', backgroundColor: 'black', objectFit: 'contain', transform: 'scale(2.5)', paddingTop: '10px'}}
            src="https://metalanarchydotcom.files.wordpress.com/2021/08/640x640.jpg"
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            style={{width: '100vw', height: '200px', backgroundColor: 'black', objectFit: 'contain', paddingTop: '10px'}}
            src="https://www.spirit-of-metal.com/les%20goupes/K/Korn/pics/1520065_logo.jpg"
            alt="Secons slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            style={{width: '100vw', height: '200px', backgroundColor: 'black', objectFit: 'contain', paddingTop: '10px'}}
            src="https://www.spirit-of-metal.com/les%20goupes/H/Hed%20PE/pics/1030011_logo.jpg"
            alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            style={{width: '100vw', height: '200px', backgroundColor: 'black', objectFit: 'contain', paddingTop: '10px'}}
            src="https://theatreofdreams.ru/800/600/https/www.pngkit.com/png/full/321-3216166_rammstein-rammstein-logo.png"
            alt="Fourth slide"
            />
        </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponent;