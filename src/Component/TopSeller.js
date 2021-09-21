import React from "react";
import { NavDropdown, Container } from "react-bootstrap";

export const TopSeller = () => {
  return (
    <Container>
      <div className="chart-two" > <p>
        <NavDropdown title="Top Seller in 1 days" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">1 day</NavDropdown.Item>
          <NavDropdown.Item href="#action4">7 days</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">30 days</NavDropdown.Item>
        </NavDropdown>
      </p>
      </div>
    </Container>
  );
};
