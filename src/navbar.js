// dependecies
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// images
import logo from '../assets/images/logoRx.png';

const NavbarBM = () => {
    return (
        <Navbar id="navbar" sticky='top' expand="lg" className="px-3 shadow-lg">
            <Navbar.Brand href="/" className="navBrand m-0 p-0">
                <img src={logo} alt="" id="navLogo" />
                <div className="d-flex flex-column px-2">
                    <span className="fs-2" id="logoBrand">BRIGHTMINDS</span>
                    <span className="fs-6" id="logoTag">Digital Marketing</span>
                </div>
            </Navbar.Brand>
            <div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="navLink fs-4 mx-4" href="/">Who We Are</Nav.Link>
                        <Nav.Link className="navLink fs-4 mx-4" href="/works">Work</Nav.Link>
                        <Nav.Link className="navLink fs-4 mx-4" href="/careers">Join Our Team</Nav.Link>
                        <Nav.Link className="navLink fs-4 mx-4" href="/contactUs">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default NavbarBM