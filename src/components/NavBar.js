import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export const NavBar = () => {
  return (
    <div>
        <Navbar bg="#2e304b" expand="md" >
            <Container className='text-light py-5'>
                <Navbar.Brand href="#home">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#about me">About Me</Nav.Link>
                    <Nav.Link href="#contact me">Contact Me</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}
