import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ChartComponent } from "./ChartComponent";
import { CollectionComponent } from "./CollectionComponent";
import { HotBidComponent } from "./HotBidComponent";
import {TopSeller} from "./TopSeller" ;
import "../Component/ExploreComponent.css";
import { SellerComponent } from "./SellerComponent";

export const ExploreComponent = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col >
            <div className ="e-main-image">
            <h2> The Watcher </h2>
            <img
              src="assets/images/first.jpg"
              width="500"
              height="500"  
            />
            </div>
          </Col>

          <Col >
            <div className="e-one">
              <h5>G'EVOLs </h5>
            <img
              src="assets/images/front.jpg"
              width="200"
              height="240"
              rounded
            />
            <div className="e-one-inner">
            <h5> The Drops </h5>
            <img 
              src="assets/images/third.jpg"
              width="200"
              height="240"  
            /> 
            </div>
            </div>
          </Col>

          <Col >
          <div className="e-two">
            <h5>Monsters</h5>
            <img
              src="assets/images/second.jpg"
              width="200"
              height="240"
              rounded
            />
            <div className="e-two-inner">
              <h5>FOMO's</h5>
            <img 
              src="assets/images/front.jpg"
              width="200"
              height="240"
            />
            </div>
            </div>
          </Col>

          <Col >
          <div className="e-three">
            <h5> Turtle's </h5>
            <img
              src="assets/images/fifth.jpg"
              width="200"
              height="240"
              rounded
            />
            <div className="e-three-inner">
              <h5> JazzXR </h5>
            <img 
              src="assets/images/first.jpg"
              width="200"
              height="240"      
            />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ChartComponent />
      <CollectionComponent />
      <HotBidComponent />
       <TopSeller />
       <SellerComponent />
    </Fragment>
  );
};
