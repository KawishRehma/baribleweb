import React from "react";

import { Container, Row, Col } from "react-bootstrap";
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
         
            <Navbar.Brand href="#" className="nav-logo">
              <img
                src="assets/images/logo.png"
                height="40"
                width="48"
                alt="Barible"
              />
              <b className="icon-name">Barible </b>
            </Navbar.Brand>
           
            
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            
              <Nav
             
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="collection, item or user"
                    className="mr-2"
                    aria-label="Search"
                  />
                </Form>
                
              
                <Nav.Link href="/" className="nav-explore">
                 
                  <b>Explore </b>{" "}
                </Nav.Link>
         
                <Nav.Link href="/myitem" className="nav-item">
                  {" "}
                  <b>items </b>{" "}
                </Nav.Link>
   
                <Nav.Link href="/following" className="nav-following">
                  {" "}
                  <b>Following </b>{" "}
                </Nav.Link>
   
                <Nav.Link href="/activity" className="nav-activity">
                  {" "}
                  <b>Activity </b>{" "}
                </Nav.Link>
                
                <Nav.Link href="/howitworks" className="nav-howitwork">
                  {" "}
                  <b>Works </b>{" "}
                </Nav.Link>
  
                <NavDropdown
                  title="Community"
                  className="nav-community"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action3">
                    Rari Token
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Discussion
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Voting</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Suggest Feature
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Barible Protocol
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Subscribe</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <div className="icon-name">
              <a
                className="btn btn-social-icon btn-google"
                href="http://google.com/+"
              >
                <i className="fa fa-google-plus"></i>
              </a>
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-google"
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>
              
              
            </div>
                </NavDropdown>
                
              </Nav>
              
              <button class="btn-hover color">Create</button> 
              
              <Button variant="outline-secondary" className="nav-walletbtn"> 
                Wallet
              </Button>
              
            </Navbar.Collapse>
          </Navbar>
        </div>
    
  );
};
