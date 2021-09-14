import React from "react";
import "../Component/HotBidComponent.css";
import { Card, Row, Col, Button } from "react-bootstrap";
import Images from "./ImagesCompoent";
import { BiHeart } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";


export const HotBidComponent = () => {
  return (
    <div className="Hotbid-one">
      <h3> Hot Bids </h3>
      <Row>
      <Col>
          <Card
            className="card-main"
            style={{ width: "16rem", height: "27rem" }}
          >
            <div className="dotted-bar">

              <span className="something">
              <img className="circle-img" src={Images.First} />
                <span class="tooltiptext">Collection: Loot</span>
                </span>
              
              <span className="something">
                <img className="circle-img11" src={Images.Fifth} />
                <span class="tooltiptext">Creator: Lucere</span>
                </span>
                
              <Button className="btn2-dotted" variant="light">
                <FiMoreHorizontal />
              </Button>
            </div>
            <Card.Body>
              <img className="main-img" src={Images.Front}  />
              <h4>Black Box</h4>
              <p className="card-p1"> From 3.4 ETH 15/90 </p>
              <div className="btn-para">
                <p className="card-p2">Bid 2 wETH</p>
                <Button className="btn-heart" variant="light">
                  <BiHeart />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card
            className="card-main"
            style={{ width: "16rem", height: "27rem" }}
          >
            <div className="dotted-bar">

              <span className="something">
              <img className="circle-img" src={Images.Front}/>
                <span class="tooltiptext">Collection: Loot</span>
                </span>
              
              <span className="something">
                <img className="circle-img11" src={Images.Second}/>
                <span class="tooltiptext">Creator: Lucere</span>
                </span>
              <Button className="btn2-dotted" variant="light">
                <FiMoreHorizontal />
              </Button>
            </div>
            <Card.Body>
              <img className="main-img" src={Images.First}  />
              <h4>Lucky Watcher</h4>
              <p className="card-p1"> From 3.4 ETH 15/90 </p>
              <div className="btn-para">
                <p className="card-p2">Bid 2 wETH</p>
                <Button className="btn-heart" variant="light">
                  <BiHeart />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card
            className="card-main"
            style={{ width: "16rem", height: "27rem" }}
          >
            <div className="dotted-bar">

              <span className="something">
              <img className="circle-img" src={Images.Second} />
                <span class="tooltiptext">Collection: Loot</span>
                </span>
              
              <span className="something">
                <img className="circle-img11" src={Images.First} />
                <span class="tooltiptext">Creator: Lucere</span>
                </span>
              <Button className="btn2-dotted" variant="light">
                <FiMoreHorizontal />
              </Button>
            </div>
            <Card.Body>
              <img className="main-img" src={Images.Fifth}  />
              <h4>Bad Dreams</h4>
              <p className="card-p1"> From 3.4 ETH 15/90 </p>
              <div className="btn-para">
                <p className="card-p2">Bid 2 wETH</p>
                <Button className="btn-heart" variant="light">
                  <BiHeart />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card
            className="card-main"
            style={{ width: "16rem", height: "27rem" }}
          >
            <div className="dotted-bar">

              <span className="something">
              <img className="circle-img" src={Images.Front} />
                <span class="tooltiptext">Collection: Loot</span>
                </span>
              
              <span className="something">
                <img className="circle-img11" src={Images.Fifth} />
                <span class="tooltiptext">Creator: Lucere</span>
                </span>
              <Button className="btn2-dotted" variant="light">
                <FiMoreHorizontal />
              </Button>
            </div>
            <Card.Body>
              <img className="main-img" src={Images.Third} />
              <h4>The Dragons</h4>
              <p className="card-p1"> From 3.4 ETH 15/90 </p>
              <div className="btn-para">
                <p className="card-p2">Bid 2 wETH</p>
                <Button className="btn-heart" variant="light">
                  <BiHeart />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </div>
  );
};
