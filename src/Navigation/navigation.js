import './navigation.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

import React from "react";
import { Link } from "react-router-dom";


function Navigation() {

    return (
        <div className="navigation">
            
                <Navbar className="navbar" bg="black" variant="dark">
                    <Container>
                        <Navbar.Brand> <Link to="/"> <img src="./logo.jpg" alt="logo" /> </Link> </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link> <Link className="link" to="/stock"> Etat des Stock </Link> </Nav.Link>
                            <Nav.Link> <Link className="link" to="/contact"> Contact &#x000AE; &#x000A9; &trade; </Link> </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
           

        </div>

    );
}

export default Navigation;