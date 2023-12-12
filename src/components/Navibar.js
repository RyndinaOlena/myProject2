import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Navibar = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand ><h3>Comfort</h3></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/" style={{ 'textDecoration': 'none' }}>Home</Link></Nav.Link>
                        <Nav.Link><Link to="/users" style={{ 'textDecoration': 'none' }}>Photo</Link></Nav.Link>
                        <Nav.Link><Link to="/about" style={{ 'textDecoration': 'none' }}>Pricing</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


        </>)
}
export default Navibar