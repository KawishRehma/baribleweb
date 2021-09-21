import React, { Component } from "react";
import { HOTCOLLECT } from "../Shared/Hotcollect";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../Component/Hotcollection.css"

class Hotcollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotcollection: HOTCOLLECT,
    };
  }

  render() {
    const collection = this.state.hotcollection.map((hotcol) => {
      return (
        <Col>
          <Card className="collect-main">
            <div key ={hotcol.id}>
                <img  className="collect-img1" src={hotcol.image} alt = {hotcol.name} />
                <img className="collect-img2" src={hotcol.image1} />
                <img className="collect-icon" src={hotcol.icon1} />
                <p className="collect-p1"> {hotcol.name}</p>
                <p className="collect-p2">{hotcol.data}</p>

            </div>

          </Card>
        </Col>
      );
    });

    return (
      <Container>
        <p className="collect-name">Hot Collections </p>
        <Row>{collection}</Row>
      </Container>
    );
  }
}
export default Hotcollection;
