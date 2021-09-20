import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { DATA } from "../Shared/data";
import "../Component/collection.css";

class Collection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collect: DATA,
    };
  }
  render() {
    const collect = this.state.collect.map((detail) => {
      if (detail.id < 4) {
        return (
          <Col className="cl1">
            <div key={detail.id} className="detail-main">
              <b > {detail.number}</b>
              <img
                className="detail-img"
                src={detail.image}
                alt={detail.name}
              />
              <img
                className="detail-icon"
                src={detail.icon}
                alt={detail.name}
              />
              <p className="detail-let">{detail.name}</p>
            </div>
          </Col>
        );
      }
     
    });

    return (
      <Container>
        <Row>{collect}</Row>
      </Container>
    );
  }
}
export default Collection;
