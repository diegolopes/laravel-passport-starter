import React from 'react';
import './index.css';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function CustomNavbar(){
    return (
        <Navbar expand="lg">
        <Navbar.Brand href="#home">React + Laravel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className="nav-item text-muted"><Link className="nav-link" to="/">Home </Link></div>
            <div className="nav-item text-muted"><Link className="nav-link" to="/discover">Explorar</Link></div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
}

export default CustomNavbar;
