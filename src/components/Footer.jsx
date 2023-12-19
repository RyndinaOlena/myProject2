import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { PiSketchLogoThin } from "react-icons/pi";

const Footer = () => {
    return (
        <Container className="float-sm-start" fluid style={{ backgroundColor: '#212529', color: 'white', display: 'flex', justifyContent: 'center', }}>
            <Row style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <Col><h6 >Місто Миколаїв</h6></Col>
                <Col><kbd>+380668382582</kbd></Col>
                <Col><kbd>+380939331160</kbd></Col>
                <PiSketchLogoThin style={{ fontSize: '100' }} sm={{ fontSize: '50' }} className='d-none d-lg-block d-md-block' />
            </Row>
        </Container >
    )
}
// className = 'd-none d-lg-block d-md-block'

export default Footer
