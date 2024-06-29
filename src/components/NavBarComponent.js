import React from "react";
import './navbar.scss';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const NavBarComponent = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="" 
                        height="30"
                        className="d-inline-block align-top" alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=" ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Portfolios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#landscape">Landscape</NavDropdown.Item>
                            <NavDropdown.Item href="#Nature">Nature</NavDropdown.Item>
                            <NavDropdown.Item href="#pets">Pets</NavDropdown.Item>
                            <NavDropdown.Item href="#ruins">Ruins</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;