import { IoCallOutline } from "react-icons/io5";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Col } from "react-bootstrap";
const Navibar = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand ><h3>Comfort</h3></Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to="/" style={{ 'textDecoration': 'none', marginRight: '10px' }}><h4>Home</h4></NavLink>
                        <NavLink to="/users" style={{ 'textDecoration': 'none', marginRight: '10px' }}><h4>Photo</h4></NavLink>

                    </Nav>
                    <Nav > <Nav.Link className="d-md-none" href='tel:+380939331160' style={{ marginLeft: 'auto' }}><IoCallOutline size={20} /></Nav.Link>
                    </Nav>
                </Container>
                <Col className='d-none d-lg-block d-md-block'>
                    <p style={{ color: 'white', margin: '0 auto', fontSize: '10px', }}> Phone:</p>
                    <p style={{ color: 'white', margin: '0 auto', fontSize: '10px', }}> +380939331160</p>
                    <p style={{ color: 'white', margin: '0 auto', fontSize: '10px', }}> +380668382582</p>
                </Col>

            </Navbar>
        </>)
}
export default Navibar