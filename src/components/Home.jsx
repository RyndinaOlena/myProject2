import React from 'react'
import Slider from './Slider'
import { Col, Container, Image, Row } from 'react-bootstrap'

import ParallaxEffect from './Jumbotron'
import kitchen2 from '../photo/kitchen/kitchen-2.jpg'


const Home = () => {
    return (
        <>
            <Slider />
            <ParallaxEffect />
            <Container style={{ marginTop: '30px', marginBottom: '30px' }}>
                <Row xs="auto" md={{ marginBottom: '20px' }}>
                    <Col xs="auto" >
                        <Image className="d-block w-100" xs="auto" src={kitchen2} md={{ height: 'auto' }} />
                    </Col>
                    <Col style={{ marginTop: '0 auto' }}>
                        <h2>Хто сказав, що меблі коштують дорого?</h2>
                        <p md={{ span: 3, offset: 3 }}>Робимо найкращі меблі для будь якого бюджету.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
