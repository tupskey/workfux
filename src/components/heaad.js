import React, { Component } from "react";
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'


class Head  extends Component {
    constructor() {
        super()

        this.state = {
            isNavOpen: false,
        }
        this.toggleNav = this.toggleNav.bind(this)
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render () {

        const style = {
            
            fontWeight: 'semi-bold',
            
        }
        return (
            <>
            <div  className="wt-navigationarea">
            <Navbar bg="light" expand="lg">
  <Container >
    <Navbar.Brand href="#home"><img src={process.env.PUBLIC_URL + 'assets/images/logo.png'}alt="company logo here" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto navbar-nav">
        <Nav.Link className="nav-item d-inline p-2" style={style}>Home</Nav.Link>
        <Nav.Link className="nav-item" style={style} >Link</Nav.Link>
        <Nav.Link className="nav-item" style={style}>Home</Nav.Link>
        <Nav.Link className="nav-item" style={style}>Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

            </div>
 
            </>
        )
    }
}

export default Head;