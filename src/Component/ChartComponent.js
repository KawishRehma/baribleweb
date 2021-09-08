import React from 'react';
import {NavDropdown} from 'react-bootstrap';

export const ChartComponent = () => {
    return (
        <div style= {{marginLeft: "50px", marginTop: "20px"}}><h3 style= {{color: 'black'}}>
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
