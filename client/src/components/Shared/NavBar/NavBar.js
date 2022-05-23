import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavBar.scss';

const NavBar = () => (
    <Navbar sticky="top" className="navbar-container" expand="lg">
        <Container>
            <Navbar.Brand href="#home" id="nav-logo">
                Blog<span className="logo-color">Mania</span>.
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto nav-items">
                    <Nav.Link href="#home" className="hover-underline-animation active-nav">
                        Home
                    </Nav.Link>
                    <Nav.Link href="#link" className="hover-underline-animation">
                        Article
                    </Nav.Link>
                    <Nav.Link href="#link" className="hover-underline-animation">
                        Team
                    </Nav.Link>
                    <Nav.Link href="#link" className="hover-underline-animation">
                        Contact
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default NavBar;
