
import planner from '../photo/kitchen/planner.jpg'
import sign from '../photo/kitchen/sign3.jpg'
import bar from '../photo/kitchen/bar.jpg'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaRegSmileBeam } from "react-icons/fa";


import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import apartment from '../photo/kitchen/apartment.jpg'
import { useState } from 'react';
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
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);
    return (
        <>
            <ParallaxContainer>
                <ParallaxBackground />
                <ContentContainer xs={'auto'} style={{ margin: '0 auto' }}>
                    {/* Ваш контент, который будет на переднем плане */}
                    <Container xs={{ height: 'auto', paddingTop: '20px' }} md={{ paddingTop: '10px', paddingBottom: '10px', width: '100%', marginTop: '100px', paddingLeft: '50px' }} style={{ paddingTop: '80px' }}>
                        <Row >
                            <Col >
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant='top' src={sign} rounded='true' />
                                    <Card.Body>
                                        <Card.Title>Відкрито <IoCheckmarkDoneSharp style={{ color: "green" }} /></Card.Title>
                                        <Card.Text>
                                            Ми працюємо на вихідних щоб Ви мали змогу зустрітись у зручний для Вас час <FaRegSmileBeam style={{ color: 'gold' }} />
                                        </Card.Text>
                                        <Button variant="primary" onClick={handleShow}>
                                            Більше інформації
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col >
                                <Card className='d-none d-lg-block .d-sm-none ' style={{ width: '18rem' }}>
                                    <Card.Img variant='top' src={planner} rounded="true" />
                                    <Card.Body>
                                        <Card.Title>Планування <IoCheckmarkDoneSharp style={{ color: "green" }} /></Card.Title>
                                        <Card.Text>
                                            Втілюємо в життя наймовірні ідеї  <FaRegSmileBeam style={{ color: 'gold' }} />
                                            <br />
                                            <br />
                                        </Card.Text>
                                        <Button variant="primary" onClick={handleShow}>
                                            Більше інформації
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col >
                                <Card className='d-none d-lg-block .d-sm-none ' style={{ width: '18rem' }}>
                                    <Card.Img variant='top' src={bar} rounded="true" style={{ height: '190px' }} />
                                    <Card.Body>
                                        <Card.Title>Меблі для Вашого закладу</Card.Title>
                                        <Card.Text>
                                            Приймаємо замовлення на виготовлення меблів Вашого закладу <FaRegSmileBeam style={{ color: 'gold' }} />
                                        </Card.Text>
                                        <Button variant="primary" onClick={handleShow}>
                                            Більше інформації
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>

                </ContentContainer>
            </ParallaxContainer>
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

    );
};

export default ParallaxEffect;
