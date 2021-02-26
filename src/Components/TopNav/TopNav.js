// @flow
import * as React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import classes from './TopNav.module.css'
import brainIcon from './brainIcon.svg'

type Props = {

};

export function TopNav(props: Props) {
    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="lg" className={classes.TopNav}>
            <Navbar.Brand><Link to="/" className={"nav-link " + classes.brandPadding}><img src={brainIcon} alt={"Brain Network"} className={classes.icon} />Brain Networks</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={"mr-auto "+classes.TopNav}>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/link" className="nav-link">Link</Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};