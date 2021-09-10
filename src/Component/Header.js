import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "../Component/Header.css";

export const Header = () => {
  return (
    <div className="main-nav">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#" className="nav-logo">
          <img
            src="assets/images/logo.png"
            height="40"
            width="48"
            alt="Barible"
          />
          <b>Barible </b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
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
            <Nav.Link href="/" className="nav-expl">
              
              <b>Explore </b>
            </Nav.Link>
            <Nav.Link href="/myitem" className="nav-myitem">
              
              <b>My items </b>
            </Nav.Link>
            <Nav.Link href="/following" className="nav-foll">
              <b>Following </b>
            </Nav.Link>
            <Nav.Link href="/activity" className="nav-act">
              <b>Activity </b>
            </Nav.Link>
            <Nav.Link className="nav-line">|</Nav.Link>
            <Nav.Link href="/howitworks" className="nav-howit">
              <b>How it works </b>
            </Nav.Link>
            <NavDropdown
              title="Community"
              id="navbarScrollingDropdown"
              className="nav-community"
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Button variant="warning" className="btn-create">
              Create
            </Button>
            <Button variant="outline-secondary" className="btn-connect">
              Connect wallet
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
