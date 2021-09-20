import React, { Component, Fragment } from "react";
import { DISPLAYS } from "../Shared/displays";
import "../Component/Explorer.css";
import { Container, Row, Col } from "react-bootstrap";
import { ChartComponent } from "./ChartComponent";
import Hotbid from "./Hotbid"
import Collection from "./Collection";
import { TopSeller } from "./TopSeller";



class Explorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displays: DISPLAYS,
    };
  }

  render() {
    const main = this.state.displays.map((display) => {
      if (display.id != 8) {
        return (
          <Col xs={6} md={6} lg={4} xl={3}>
            <div key={display.id} className="main-exp1">
              <h5 className="text1">{display.name} </h5>
              <img
                className="exp-img"
                src={display.image}
                alt={display.name}
              />
            </div>
          </Col>
        );
      } else {
        return (
          <div></div>
        );
      }
    });

    return (
      <Fragment>
        <Container>
          <Row>{main}</Row>
        </Container>
        <ChartComponent />
        <Collection />
        <Hotbid />
        <TopSeller />
      </Fragment>
    );
  }
}
export default Explorer;
