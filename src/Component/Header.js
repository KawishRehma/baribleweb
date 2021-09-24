import React from "react";
import { FaFacebook, FaGooglePlusG, FaInstagram, FaTwitterSquare, FaYoutube, FaLinkedin, FaPinterest } from "react-icons/fa";
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

<Navbar bg="light" expand="lg" className="navbar-main11">
  <Navbar.Brand href="#" className="nav-logo"><img src="assets/images/logo.png" height="40" width="48" alt="Barible" />
          <b className="icon-name">Barible </b></Navbar.Brand>
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
       
        placeholder=  "collection, item or user"
        className="mr-2"
        aria-label="Search"
      />
      
    </Form>
      <Nav.Link href="#action1"> <b>Explore </b> </Nav.Link>
      <Nav.Link href="#action1"> <b>My items </b> </Nav.Link>
      <Nav.Link href="#action1"> <b>Following </b> </Nav.Link>
      <Nav.Link href="#action1"> <b>Activity </b> </Nav.Link>
      <Nav.Link href="#action1"> <b>How it Works </b> </Nav.Link>
      
      <NavDropdown title="Community" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Rari Token</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Discussion</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Voting</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Suggest Feature</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Barible Protocol</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Subscribe</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5" className="fonts-main">  <FaGooglePlusG/> <FaFacebook />  <FaInstagram /> <FaTwitterSquare /> <FaYoutube /> <FaLinkedin/> <FaPinterest/>
      </NavDropdown.Item>
      </NavDropdown>
      
    </Nav>
    <a class="gradient-button gradient-button"> Create</a>
    <Button variant="outline-secondary">Wallet</Button>
  </Navbar.Collapse>
</Navbar>











      {/* <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#" className="nav-logo">
          <img src="assets/images/logo.png" height="40" width="48" alt="Barible" />
          <b className="icon-name">Barible </b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-1 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Creator, item or collection"
                className="search-bar"
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
            <a class="gradient-button gradient-button"> Create</a>
            
            <Button variant="outline-secondary" className="btn-connect">
              Connect wallet
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
    </div>
  );
};
