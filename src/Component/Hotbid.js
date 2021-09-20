import React, { Component } from "react";
import { Container, Row, Col, Card, Button} from "react-bootstrap";
import { HOTBIDDATA } from "../Shared/Hotbiddata";
import { BiHeart } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import "../Component/Hotbid.css";

class Hotbid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotbiddata: HOTBIDDATA,
    };
  }

  render() {
    const hotbid = this.state.hotbiddata.map((bid) => {
      return (
        <Col>
          <Card className="cardmain11">
            <div key={bid.id}>
                <div className="cardhead11">

               
                    <img className="cardhear-img1" src={bid.image1} />
                 
                 
                    <img className="cardhear-img2" src= {bid.image2} />
                
                    <Button className="cardhear-btn" variant="light"> <FiMoreHorizontal /> </Button>
                    
                </div>
              <Card.Body>
                <img  className="card-main-img11" src={bid.image} alt={bid.name} />
                <p className="card-p11">{bid.name}</p>
                <p className="card-p22">{bid.description}</p>
              </Card.Body>
              <div className="card-parag">
                <p className="card-p33">{bid.data}</p>
                <Button className="card-btnp" variant="light"> <BiHeart /> </Button>
              </div>
            </div>
          </Card>
        </Col>
      );
    });

    return (
      <Container>
        <p className="chart-two"> Hot Bids</p>
        <Row>{hotbid}</Row>
      </Container>
    );
  }
}
export default Hotbid;
