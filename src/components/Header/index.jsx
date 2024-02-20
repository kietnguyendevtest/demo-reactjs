import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logo from "../../assets/images/logo2.png";

function Header() {
    return (
        <header className="header">
            <Navbar
                expand="lg"
                className="bg-body-tertiary"
                bg="dark"
                data-bs-theme="dark"
            >
                <Container>
                    <NavLink to="/" className="navbar-brand ">
                        {/* <img src={logo} alt="" width={30} /> */}
                        CRUD ReactJS
                    </NavLink>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/about" className="nav-link">
                                About
                            </NavLink>
                            <NavLink to="/contact" className="nav-link">
                                Contact
                            </NavLink>
                            <NavLink to="/books" className="nav-link">
                                Books
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
