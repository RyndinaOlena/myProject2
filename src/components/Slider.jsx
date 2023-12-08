import React from 'react'
import { Carousel } from 'react-bootstrap'
import kitchen from '../kitchen-1940174_1280 1.png'
import couch from '../couch-1845270_1280 2.png'
import kitchenRoom from '../kitchen-4043098_1280 1.png'
const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item style={{ 'height': '500px' }}>
                <img
                    className="d-block w-100"
                    src={kitchen}
                    alt='First slide' />
                <Carousel.Caption>
                    <h3>Web slider</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, iusto.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ 'height': '500px' }}>
                <img
                    className="d-block w-100"
                    src={couch}
                    alt='second slide' />
                <Carousel.Caption>
                    <h3>Web slider</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, iusto.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ 'height': '500px' }}>
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
