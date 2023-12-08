// import React from 'react'
// import { Button, Nav, Navbar } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { Link } from 'react-router-dom';

// const Navibar = () => {
//     return (
//         <>
//             <Navbar expand="lg" bg='dark' variant='dark'>
//                 <Navbar.Brand>Web Blog</Navbar.Brand>
//                 <Navbar.Toggle aria-controls='responsive-navbar-nav' />
//                 <Navbar.Collapse id="responsive-navbar-nav" />
//                 <Nav className='mr-auto'>
//                     <Nav.Link><Link to="/">Home</Link></Nav.Link>
//                     <Nav.Link><Link to="/users">User</Link></Nav.Link>
//                     <Nav.Link ><Link to="/about">About</Link></Nav.Link>
//                 </Nav>
//                 <Nav >
//                     <Button variant='primary' className="mr-2">Log In</Button>
//                     <Button variant='primary' className="mr-2">Sign In</Button>
//                 </Nav>
//                 <Navbar.Collapse />
//             </Navbar>
//         </>
//     )
// }

// export default Navibar

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Navibar = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand >Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/" style={{ 'textDecoration': 'none' }}>Home</Link></Nav.Link>
                        <Nav.Link><Link to="/users" style={{ 'textDecoration': 'none' }}>Features</Link></Nav.Link>
                        <Nav.Link><Link to="/about" style={{ 'textDecoration': 'none' }}>Pricing</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


        </>)
}
export default Navibar