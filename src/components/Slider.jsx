import React from 'react'
import { Carousel } from 'react-bootstrap'
import kitchen from '../photo/kitchen/kitchen-1.png'
import couch from '../photo/kitchen/couch.png'
import kitchenRoom from '../photo/kitchen/kitchen-2.png'
const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item md={{ 'height': '500px' }}>
                <img
                    className="d-block w-100"
                    src={kitchen}
                    alt='First slide' />
                <Carousel.Caption>
                    <h3>Web slider</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, iusto.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item md={{ 'height': '500px' }}>
                <img
                    className="d-block w-100"
                    src={couch}
                    alt='second slide' />
                <Carousel.Caption>
                    <h3>Web slider</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, iusto.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item md={{ 'height': '500px' }}>
                <img
                    className="d-block w-100"
                    src={kitchenRoom}
                    alt='third slide' />
                <Carousel.Caption>
                    <h3>Web slider</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, iusto.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider
