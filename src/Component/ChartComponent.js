import React from 'react';
import {NavDropdown, Container} from 'react-bootstrap';
import "../Component/collection.css";
export const ChartComponent = () => {
    return (
        <Container>
        <div className="chart-one" ><p >
            <NavDropdown    title= "Top collection in 7 days" id="navbarScrollingDropdown" > 
        <NavDropdown.Item href="#action3">1 day</NavDropdown.Item>
        <NavDropdown.Item href="#action4">7 days</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">30 days</NavDropdown.Item>
      </NavDropdown>
      </p>
        </div>
        </Container>
        
    )
}
