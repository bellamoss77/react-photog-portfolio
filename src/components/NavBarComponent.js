import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import './navbar.scss';

const NavBarComponent = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        if (menuOpen) {
            setDropdownOpen(false);
        }
    };

    const toggleDropdown = (isOpen) => {
        setDropdownOpen(isOpen);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <Navbar expand="lg" className={`navbar-custom ${menuOpen ? 'open' : ''}`}>
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="https://raw.githubusercontent.com/bellamoss77/react-photog-portfolio/449a4734a81535e6dacb488230b3ffb9e5fd6d67/public/LOGO.svg" 
                        height="30"
                        className="d-inline-block align-top" alt="Logo" />
                </Navbar.Brand>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className={`icon ${menuOpen ? 'open' : ''}`}></div>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
                <Navbar.Collapse className={menuOpen ? 'show' : ''} id="basic-navbar-nav">
                    <Nav className="ml-auto" id="nav-link-container">
                        <NavLink to="/" end className="nav-link-custom" activeClassName="active">Home</NavLink>
                        <NavDropdown title={
                            <span className="portfolio-title">
                                Portfolios
                                <FontAwesomeIcon icon={dropdownOpen ? faCaretUp : faCaretDown} className="dropdown-icon" />
                            </span>
                        } 
                        id="basic-nav-dropdown"
                        onToggle={toggleDropdown}>
                            <NavLink to="/landscape" className="dropdown-item" activeClassName="active">Landscape</NavLink>
                            <NavLink to="/nature" className="dropdown-item" activeClassName="active">Nature</NavLink>
                            <NavLink to="/pets" className="dropdown-item" activeClassName="active">Pets</NavLink>
                            <NavLink to="/ruins" className="dropdown-item" activeClassName="active">Ruins</NavLink>
                        </NavDropdown>
                        <NavLink to="/about" className="nav-link-custom" activeClassName="active">About</NavLink>
                        <NavLink to="/contact" className="nav-link-custom" activeClassName="active">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;
