import { IoCallOutline } from "react-icons/io5";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
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
                    <Nav> <Nav.Link href='tel:+380939424083' style={{ marginLeft: 'auto' }}><IoCallOutline size={30} /></Nav.Link></Nav>

                </Container>
            </Navbar>


        </>)
}
export default Navibar