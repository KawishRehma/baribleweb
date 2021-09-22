import React, { Component } from "react";
import { Container, Row, DropdownButton, Dropdown } from "react-bootstrap";
import "../Component/ExplorerComponent.css";
import { GiBasketballBall } from "react-icons/gi";
import { FcCamera, FcMusic, FcPicture } from "react-icons/fc";
import { Dropdowndata } from "../Shared/Dropdowndata";
import { Categorylist } from "../Shared/categorylistdown";

class ExploreComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: Categorylist,
      multidata: Dropdowndata,
    };
  }

  render() {
    const categor = this.state.categories.map((categor) => {
      if (categor.Category == "art") {
        return (
          <div key={categor.id} className="category-maindata">
            <img className=" category-img" src={categor.image} />
            <img className=" category-img1" src={categor.image1} />
            <img className=" category-img2" src={categor.image2} />
            <img className=" category-img3" src={categor.image3} />
          </div>
        );
      } else if (categor.Category == "photograohy") {
        return (
          <div key={categor.id} className="category-maindata">
            <img className=" category-img" src={categor.image} />
            <img className=" category-img1" src={categor.image1} />
            <img className=" category-img2" src={categor.image2} />
            <img className=" category-img3" src={categor.image3} />
          </div>
        );
      } else if (categor.Category == "games") {
        return (
          <div key={categor.id} className="category-maindata">
            <img className=" category-img" src={categor.image} />
            <img className=" category-img1" src={categor.image1} />
            <img className=" category-img2" src={categor.image2} />
            <img className=" category-img3" src={categor.image3} />
          </div>
        );
      } else if (categor.Category == "music") {
        return (
          <div key={categor.id} className="category-maindata">
            <img className=" category-img" src={categor.image} />
            <img className=" category-img1" src={categor.image1} />
            <img className=" category-img2" src={categor.image2} />
            <img className=" category-img3" src={categor.image3} />
          </div>
        );
      }
    });

    const expodata = this.state.multidata.map((muldata) => {
      return (
        <div key={muldata.id} className="expo-dp1">
          <DropdownButton
            variant="light"
            title={muldata.name}
            className="expo-dpbtn"
          >
            <Dropdown.Item href="/following">
              
              <FcPicture /> {muldata.List1}
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              {" "}
              <FcCamera /> {muldata.List2}
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              {" "}
              <GiBasketballBall /> {muldata.List3}
            </Dropdown.Item>
            <Dropdown.Item href="#/action-4">
              {" "}
              <FcMusic /> {muldata.List4}
            </Dropdown.Item>
          </DropdownButton>
        </div>
      );
    });
    return (
      <Container>
        <Row>
          <div className="expo-function">
            <p className="multifunction-main">Explore</p>
            <div className="expo-dpmain">{expodata}</div>
          </div>
        </Row>

        {categor}
      </Container>
    );
  }
}
export default ExploreComponent;
