import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

import blackKitch from '../photo/blackKitchen.png'
import broukKitch from '../photo/brounKitchen.png'
import closet from '../photo/closet.png'
import grinKitch from '../photo/grinKitchen.png'
import kitchen from '../photo/kitchen.png'
import redKitch from '../photo/redKitchen.png'
import rivera from '../photo/rivera.png'
import tv from '../photo/tv.png'
import whiteKitch from '../photo/whiteKitchen.png'

const Photo = () => {
    return (
        <Container style={{ paddingTop: '10px', paddingBottom: '10px', width: '100%', marginTop: '50px', paddingLeft: '50px' }}>
            <Row>
                <Col >
                    <Card style={{ width: '18rem', margin: '20px', }}>
                        <Card.Img variant='top' src={blackKitch} rounded="true" style={{ height: '15rem' }} />
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
                    <Card style={{ width: '18rem', margin: '20px', }}>
                        <Card.Img variant='top' src={rivera} rounded="true" style={{ height: '15rem' }} />
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
                    <Card style={{ width: '18rem', margin: '20px' }}>
                        <Card.Img variant='top' src={closet} rounded="true" style={{ height: '15rem' }} />
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

            <Row>
                <Col >
                    <Card style={{ width: '18rem', margin: '20px' }}>
                        <Card.Img variant='top' src={grinKitch} rounded="true" style={{ height: '15rem' }} />
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
                    <Card style={{ width: '18rem', margin: '20px' }}>
                        <Card.Img variant='top' src={kitchen} rounded="true" style={{ height: '15rem' }} />
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
                    <Card style={{ width: '18rem', margin: '20px' }}>
                        <Card.Img variant='top' src={redKitch} rounded="true" style={{ height: '15rem' }} />
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
            <Row>
                <Col >
                    <Card style={{ width: '18rem', margin: '20px' }}>
                        <Card.Img variant='top' src={tv} rounded="true" style={{ height: '15rem' }} />
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
                    <Card style={{ width: '18rem', margin: '20px' }}>
                        <Card.Img variant='top' src={broukKitch} rounded="true" style={{ height: '15rem' }} />
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
                    <Card style={{ width: '18rem', margin: '20px' }}>
                        <Card.Img variant='top' src={whiteKitch} rounded="true" style={{ height: '15rem' }} />
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
    )
}

export default Photo
