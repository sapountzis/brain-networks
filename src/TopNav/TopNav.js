// @flow
import * as React from 'react';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import classes from './TopNav.module.css'

type Props = {

};

export function TopNav(props: Props) {
    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="lg" className={classes.TopNav}>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={"mr-auto "+classes.TopNav}>
                    <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/link"  >Link</Link></Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};