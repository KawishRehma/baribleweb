import React from 'react';
import {NavDropdown} from 'react-bootstrap';
import "../Component/collections.css";
export const ChartComponent = () => {
    return (
        <div className="chart-one" ><h3 >
            <NavDropdown    title= "Top collection in 7 days" id="navbarScrollingDropdown" > 
        <NavDropdown.Item href="#action3">1 day</NavDropdown.Item>
        <NavDropdown.Item href="#action4">7 days</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">30 days</NavDropdown.Item>
      </NavDropdown>
      </h3>
        </div>
        
    )
}
