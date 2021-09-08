import React from 'react';
import {Dropdown, DropdownButton} from "react-bootstrap";

export const ChartComponent = () => {
    return (
        <div style= {{marginLeft: "50px", marginTop: "20px"}}>
            
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
        </div>
    )
}
