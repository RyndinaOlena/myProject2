import React from 'react'
import Slider from './Slider'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import coutch from '../couch.png'
import Jumbotron from './Jumbotron'
import ParallaxEffect from './Jumbotron'
import kitchen2 from 'kitchen-2.png'


const Home = () => {
    return (
        <>
            <Slider />
            <ParallaxEffect />
            <Container style={{ marginTop: '30px', marginBottom: '30px' }}>
                <Row>
                    <Col mb={7}>
                        <img src={kitchen2} height={400} />
                    </Col>
                    <Col mb={5}>
                        <h2>Web</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque saepe, sint, omnis itaque nulla eaque voluptas id libero a veniam voluptatibus distinctio magnam earum assumenda dolores, ea porro inventore commodi.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
