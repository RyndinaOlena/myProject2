import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <Container fluid style={{ backgroundColor: '#212529', color: 'white' }}>
            <Container style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                <p>Web developer</p>
            </Container>
        </Container>
    )
}

export default Footer
