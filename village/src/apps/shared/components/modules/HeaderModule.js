import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class HeaderModule extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar bg="light" variant="light">
                <LinkContainer to="/">
                    <Navbar.Brand href="/">Vacant</Navbar.Brand>
                </LinkContainer>
                <LinkContainer to="/">
                    <Nav.Link href="/">Home</Nav.Link>
                </LinkContainer>
                <NavDropdown title="GameCenter">
                    <LinkContainer to="/gamecenter/puzzlepanel">
                        <NavDropdown.Item>PuzzlePanel</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>
            </Navbar>
        );
    }
}

export default HeaderModule;