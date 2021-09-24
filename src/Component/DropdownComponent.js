import React from "react";
import { Container } from "react-bootstrap";
import "../Component/DropdownComponent.css";
import { Categorylist } from "../Shared/categorylistdown";

function CharacterDropDown() {
  const [items, Categorylist] = React.useState([
    {
      label: "Category",
      value: "Category",
    },
    { label: "Categorylist.Lis", value: "Art" },
    { label: "Photography", value: "Photography" },
    { label: "Games", value: "Games" },
    { label: "Music", value: "Music" },
  ]);
  return (
    <Container>
      <div className=" Dropdown-main">
        <p className="multifunction-main1">Explore</p>
        <select className="dropdown-main11" >
          {items.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </Container>
  );
}
export default CharacterDropDown;
