import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


export const Header = () => {
    return (
        <div>
                <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#" style = {{marginLeft: 45}}><img  src="assets/images/logo.png" height="40" width="48" alt="Barible" /> <b>Barible </b></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
        <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Creator, item or collection"
        className="mr-2"
        aria-label="Search"
      />
      
    </Form>
      <Nav.Link href="#action1" style = {{marginLeft: 20}}> <b>Explore </b></Nav.Link>
      <Nav.Link href="#action2" style = {{marginLeft: 20}}> <b>My items </b></Nav.Link>
      <Nav.Link href="#action2" style = {{marginLeft: 20}}><b>Following </b></Nav.Link>
      <Nav.Link href="#action2" style = {{marginLeft: 20}}><b>Activity </b></Nav.Link>
      <Nav.Link style = {{marginLeft: 20}}>|</Nav.Link>
      <Nav.Link href="#action2" style = {{marginLeft: 20}}><b>How it works </b></Nav.Link>
      <NavDropdown title="Community" id="navbarScrollingDropdown" style = {{marginLeft: 20}}> 
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
      <Button variant="warning" >Create</Button>
      <Button variant="outline-secondary"style = {{marginLeft: 20}}>Connect wallet</Button>

    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </div>
    );
}
