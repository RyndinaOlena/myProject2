import React, { useState } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import blackKitch from '../photo/works/blackKitchen.png'
import broukKitch from '../photo/works/brounKitchen.png'
import closet from '../photo/works/closet.png'
import grinKitch from '../photo/works/grinKitchen.png'
import kitchen from '../photo/works/kitchen.png'
import redKitch from '../photo/works/redKitchen.png'
import rivera from '../photo/works/rivera.png'
import tv from '../photo/works/tv.png'
import whiteKitch from '../photo/works/whiteKitchen.png'
import { Suspense } from 'react'
import Loader from './Loader'

const Photo = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        < >
            <Container style={{ padding: '10px 0 10px 50px', width: '100%', marginTop: '50px', }}>
                <Suspense fallback={<Loader />}>
                    <Row>
                        <Col >
                            <Card role="status" style={{ width: '18rem', margin: '20px', }}>
                                <Card.Img variant='top' src={blackKitch} rounded="true" style={{ height: '15rem' }} />
                                <Card.Body>
                                    <Card.Title>Web</Card.Title>
                                    <Card.Text>
                                        Lorem, ipsum.
                                    </Card.Text>
                                    <Button variant="primary" onClick={handleShow}>
                                        Launch demo modal
                                    </Button>
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
                                    <Button variant="primary" onClick={handleShow}>
                                        Launch demo modal
                                    </Button>
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
                                    <Button variant="primary" onClick={handleShow}>
                                        Launch demo modal
                                    </Button>
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
                                    <Button variant="primary" onClick={handleShow}>
                                        Launch demo modal
                                    </Button>
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
                                    <Button variant="primary" onClick={handleShow}>
                                        Launch demo modal
                                    </Button>
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
                                    <Button variant="primary" onClick={handleShow}>
                                        Launch demo modal
                                    </Button>
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
                                    <Button variant="primary" onClick={handleShow}>
                                        Launch demo modal
                                    </Button>
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
                                    <Button variant="primary" onClick={handleShow}>
                                        Launch demo modal
                                    </Button>
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
                                    <Button variant="primary" onClick={handleShow}>
                                        Launch demo modal
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Suspense>
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Photo
