import React from "react";
import "../Component/HotBidComponent.css";
import { Card, Row, Col, Button} from "react-bootstrap";
import { BiHeart } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";

export const HotBidComponent = () => {
  return (
    <div className="Hotbid-one">
      <h3> Hot Bids </h3>
      <Row>
        <Col>
          <Card className="card-main" style={{ width: "16rem", height:"27rem"}}>

          <div className="dotted-bar">
          
          <img className="circle-img" src="assets/images/first.jpg"  />
          
          <img className="circle-img1"  src="assets/images/front.jpg"  /> 
          
          
 
          <Button className="btn2-dotted" variant="light">  <FiMoreHorizontal /> </Button>
          
          </div>
            <Card.Body>
            
              <img src="assets/images/first.jpg" height="200" width="225" />
              <h4>Lucky Watcher</h4>
              <p className="card-p1"> From 3.4 ETH 15/90 </p>
              <div className="btn-para">
              <p className="card-p2">Bid 2 wETH</p> 
              <Button className="btn-heart" variant="light"> <BiHeart />  </Button> </div>
            </Card.Body>
           
          </Card>
        </Col>

        <Col>
          <Card className="card-main" style={{ width: "16rem", height:"27rem"}}>

          <div className="dotted-bar">
          
          <img className="circle-img" src="assets/images/first.jpg"  />
          
          <img className="circle-img1"  src="assets/images/front.jpg"  /> 
          
          
 
          <Button className="btn2-dotted" variant="light">  <FiMoreHorizontal /> </Button>
          
          </div>
            <Card.Body>
            
              <img src="assets/images/front.jpg" height="200" width="225" />
              <h4>The Hunter</h4>
              <p className="card-p1"> From 3.4 ETH 15/90 </p>
              <div className="btn-para">
              <p className="card-p2">Bid 2 wETH</p> 
              <Button className="btn-heart" variant="light"> <BiHeart />  </Button> </div>
            </Card.Body>
           
          </Card>
        </Col>

        <Col>
          <Card className="card-main" style={{ width: "16rem", height:"27rem"}}>

          <div className="dotted-bar">
          
          <img className="circle-img" src="assets/images/first.jpg"  />
          
          <img className="circle-img1"  src="assets/images/front.jpg"  /> 
          
          
 
          <Button className="btn2-dotted" variant="light">  <FiMoreHorizontal /> </Button>
          
          </div>
            <Card.Body>
            
              <img src="assets/images/fifth.jpg" height="200" width="225" />
              <h4>Night Watch</h4>
              <p className="card-p1"> From 3.4 ETH 15/90 </p>
              <div className="btn-para">
              <p className="card-p2">Bid 2 wETH</p> 
              <Button className="btn-heart" variant="light"> <BiHeart />  </Button> </div>
            </Card.Body>
           
          </Card>
        </Col>

        <Col>
          <Card className="card-main" style={{ width: "16rem", height:"27rem"}}>

          <div className="dotted-bar">
          
          <img className="circle-img" src="assets/images/first.jpg"  />
          
          <img className="circle-img1"  src="assets/images/front.jpg"  /> 
         
          
 
          <Button className="btn2-dotted" variant="light">  <FiMoreHorizontal /> </Button>
          
          </div>
            <Card.Body>
            
              <img src="assets/images/second.jpg" height="200" width="225" />
              <h4>Black Box</h4>
              <p className="card-p1"> From 3.4 ETH 15/90 </p>
              <div className="btn-para">
              <p className="card-p2">Bid 2 wETH</p> 
              <Button className="btn-heart" variant="light"> <BiHeart />  </Button> </div>
            </Card.Body>
           
          </Card>
        </Col>

        
        
      </Row>
    </div>
  );
};
