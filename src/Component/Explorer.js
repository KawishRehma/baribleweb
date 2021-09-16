import React, { Component } from "react";
import { DISPLAYS } from "../Shared/displays";
import "../Component/Explorer.css";
import { Container , Row , Col} from "react-bootstrap";

class Explorer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displays: DISPLAYS,
    };
  }

  render() {
    const main = this.state.displays.map((display) => {
      if (display.id == 0) {
        return (
          <Col className="col-12 col-sm-12 col-md-8 col-lg-5  ">
          <div key={display.id} className="main-exp"  >
              <div >
              <h5 className="text" >{display.name} </h5>
              <img 
                className="exp-img"
                
                src={display.image}
                alt={display.name}
              />
              </div>
   
            </div>
            </Col>
          
        );
      } else if( display.id >0){
        return (
          <Col  className="col-12 col-sm-6 col-md-4 col-lg-2 ">
          <div key={display.id}  className="main-exp1" >
            <div  >
            <h5 className="text1">{display.name} </h5>
              <img 
                className="exp-img1"
                
                src={display.image}
                alt={display.name}
              />
              
                </div>
            </div>
          </Col>

        );  
      }
    });

    return (
      <Container >
        <Row >
          {main}
        </Row>
      </ Container>
          
      
    );
  }
}
export default Explorer;
