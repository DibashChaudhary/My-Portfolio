import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export const NavBar = () => {
  return (
    <div>
 
        <Navbar bg="#2e304b" expand="md" className='to-nav'>
            <Container className='text-light'>
                <Link className='nav-link' to="/">Logo</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto navbarMenu">
                    <Link className='nav-link' to="/skills">Skills</Link>
                    <Link className='nav-link' to="/projects">Projects</Link>
                    <Link className='nav-link' to="/about-me">About Me</Link>
                    <Link className='nav-link' to="/contact-me">Contact Me</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      
    </div>
  )
}
