import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
    return (
    <Carousel title="Our Partners">
        <Carousel.Item>
            <img
            style={{width: '100vw', height: '200px', backgroundColor: 'black', objectFit: 'none'}}
            src="https://metalanarchydotcom.files.wordpress.com/2021/08/640x640.jpg"
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            style={{width: '100vw', height: '200px', backgroundColor: 'black', objectFit: 'contain'}}
            src="https://www.spirit-of-metal.com/les%20goupes/K/Korn/pics/1520065_logo.jpg"
            alt="Secons slide"
            />
        </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponent;