// import React, { useEffect, useState } from 'react'
// import { Card, Carousel, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
// import styled from 'styled-components'
// import coutch from '../couch.png'
// import { Container } from 'react-bootstrap'
// const Styles = styled.div`
// .parallax-container {
//   position: relative;
//   height: 600px; /* Высота вашей секции, настройте по своему усмотрению */
//   overflow: hidden;
// }
// .jumbo {
//     backroundImage: url(${coutch}) no-repeat fixed bottom;
//     backroundSize: cover;
//     color: #efefef;
//     height: 300px;
//     position: relativel;
//     z-index: -2;
// }
// .overlay {
//     backround-color: #000;
//     opasity: 0.7;
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     z-index: -1;
// }
// .container {
//   position: relative;
//   z-index: 1; 
//   padding: 100px 0; 
//   color: #fff;
// }
// `

// const Jumbotron = () => {
//     const [offset, setOffset] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             setOffset(window.pageYOffset);
//         }; window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <Styles>
//             <div className="jumbo">
//                 <div
//                     className="parallax-background"
//                     style={{ transform: `translateY(-${offset * 0.5}px) backroundImage: url(${coutch})` }}
//                 >
//                     {/* Ваш контент, который будет на переднем плане */}
//                     <div className="container">
//                         <h1>Your Title</h1>
//                         <p>Your text goes here.</p>
//                     </div>
//                 </div>
//             </div>
//         </Styles>


//     )
// }

// export default Jumbotron

import coutch from '../couch.png'
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import apartment from 'apartment.jpg'
const ParallaxContainer = styled.div`
margin-top: 10px;
  position: relative;
  height: 500px; /* Высота вашей секции, настройте по своему усмотрению */
  overflow: hidden;
`;

const ParallaxBackground = styled.div`

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${apartment}); /* Замените на свой URL фона */
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Зафиксируйте фон для создания параллакс-эффекта */

`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1; /* Позволяет контенту быть поверх фона */
  padding: 200px0px 0; /* Регулируйте отступы по своему усмотрению */
  color: #fff; /* Цвет текста на вашем фоне */
`;

const ParallaxEffect = () => {
    // const [offset, setOffset] = useState(0);
    // <ParallaxBackground style={{ transform: `translateY(-${offset * 0.5}px)` }} />
    // useEffect(() => {
    //     const handleScroll = () => {
    //         setOffset(window.pageYOffset);
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <ParallaxContainer>
            <ParallaxBackground />
            <ContentContainer>
                {/* Ваш контент, который будет на переднем плане */}
                <Container style={{ paddingTop: '10px', paddingBottom: '10px', width: '100%', marginTop: '100px', paddingLeft: '50px' }}>
                    <Row>
                        <Col >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant='top' src={coutch} rounded='true' />
                                <Card.Body>
                                    <Card.Title>Web</Card.Title>
                                    <Card.Text>
                                        Lorem, ipsum.
                                    </Card.Text>
                                    <Button variant='primary'>Load more</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant='top' src={coutch} rounded="true" />
                                <Card.Body>
                                    <Card.Title>Web</Card.Title>
                                    <Card.Text>
                                        Lorem, ipsum.
                                    </Card.Text>
                                    <Button variant='primary'>Load more</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant='top' src={coutch} rounded="true" />
                                <Card.Body>
                                    <Card.Title>Web</Card.Title>
                                    <Card.Text>
                                        Lorem, ipsum.
                                    </Card.Text>
                                    <Button variant='primary'>Load more</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <div className="container">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deserunt ipsum minus ut. Exercitationem consequatur molestias impedit, eligendi nostrum voluptatibus vitae, excepturi cupiditate quidem cum dicta eius aspernatur quia praesentium!</p>
                </div>
            </ContentContainer>
        </ParallaxContainer>

    );
};

export default ParallaxEffect;
