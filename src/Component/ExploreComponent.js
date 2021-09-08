import React, { Fragment } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { ChartComponent } from "./ChartComponent";

export const ExploreComponent = () => {
  return (
    <Fragment>  
      <Container>
        <Row>
        <Col style={{marginLeft: "-60px", marginTop: "20px"}}>
            <Image src="assets/images/first.jpg" width="500" height="500" rounded/>
          </Col>
          <Col style={{ marginTop: "20px"}}>
            <Image
              src="assets/images/front.jpg" width="210" height="240" rounded
            />
            <Image src="assets/images/third.jpg" width="210" height="240" style={{ marginTop: "20px"}}  rounded/>
          </Col>
          <Col style={{marginLeft:"-14px", marginTop: "20px"}}>
            <Image src="assets/images/second.jpg" width="210" height="240" rounded/>
            <Image src="assets/images/front.jpg" width="210" height="240" style={{ marginTop: "20px"}}  rounded/>
          </Col>
          <Col style={{marginLeft:"-12px", marginTop: "20px"}}>
            <Image src="assets/images/third.jpg" width="210" height="240"  rounded/>
            <Image src="assets/images/first.jpg" width="210" height="240" style={{ marginTop: "20px"}}  rounded/>
          </Col>
        </Row>
      </Container>

      <ChartComponent />
    </Fragment>
    
    
        
  ); 
};
