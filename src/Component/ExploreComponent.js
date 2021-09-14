import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ChartComponent } from "./ChartComponent";
import { CollectionComponent } from "./CollectionComponent";
import { HotBidComponent } from "./HotBidComponent";
import {TopSeller} from "./TopSeller" ;
import "../Component/ExploreComponent.css";
import { SellerComponent } from "./SellerComponent";
import Images from "./ImagesCompoent";

export const ExploreComponent = () => {
  return (
    <Fragment>
      <Container className="main-explorer" fluid>
        <Row>
          <Col >
            <div className ="e-main-image">
            <h2> The Watcher </h2>
            <img
              src={Images.First}
              width="550"
              height="570"  
            />
            </div>
          </Col>

          <Col >
            <div className="e-one">
              <h5>G'EVOLs </h5>
            <img
              src={Images.Front}
              width="260"
              height="267"
              rounded
            />
            <div className="e-one-inner">
            <h5> The Drops </h5>
            <img 
              src={Images.Second}
              width="260"
              height="267"  
            /> 
            </div>
            </div>
          </Col>

          <Col >
          <div className="e-two">
            <h5>Monsters</h5>
            <img
              src={Images.Fifth}
              width="260"
              height="267"
              rounded
            />
            <div className="e-two-inner">
              <h5>FOMO's</h5>
            <img 
              src={Images.Front}
              width="260"
              height="267"
            />
            </div>
            </div>
          </Col>

          <Col >
          <div className="e-three">
            <h5> Turtle's </h5>
            <img
              src={Images.Third}
              width="260"
              height="267"
              rounded
            />
            <div className="e-three-inner">
              <h5> JazzXR </h5>
            <img 
              src={Images.First}
              width="260"
              height="267"      
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
