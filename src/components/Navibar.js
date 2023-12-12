
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
const Navibar = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand ><h3>Comfort</h3></Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to="/" style={{ 'textDecoration': 'none', marginRight: '10px' }}>Home</NavLink>
                        <NavLink to="/users" style={{ 'textDecoration': 'none', marginRight: '10px' }}>Photo</NavLink>
                        <NavLink to="/about" style={{ 'textDecoration': 'none', marginRight: '10px' }}>Pricing</NavLink>
                    </Nav>
                </Container>
            </Navbar>


        </>)
}
export default Navibar