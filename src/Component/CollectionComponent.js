import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Component/collections.css"
import Images from "./ImagesCompoent";

export const CollectionComponent = () => {
  return (
    <div>
      <Container>
        <Row className="collection-row">
          <Col className="cl">
            <div className="one"> 
            <p className="p-no">1.</p>
            <img
              src= {Images.First}
              width="45"
              height="45"
            />
            <img className="icon-one"
              src= {Images.icon}
              width="20"
              height="20"
            />
            <p className="p-let"> Loot </p>
            <p className="p-let-no1"> $15,000 </p>
            </div>
            <div className="one">   
            <p className="p-no"> 2.</p>
            <img
              src= {Images.Front}
              width="45"
              height="45"  
            />
            <img className="icon-one"
              src= {Images.icon}
              width="20"
              height="20"
            />
            <p className="p-let"> Blocks </p>
            <p className="p-let-no2"> $15,000 </p>
            </div>
            <div className="one"> 
            <p className="p-no"> 3.</p>
            <img
              src= {Images.Second}
              width="45"
              height="45"  
            />
            <img className="icon-one"
              src={Images.icon}
              width="20"
              height="20"  
            />
            <p className="p-let"> BordApp </p>
            <p className="p-let-no3"> $15,000 </p>
            </div>
          </Col>

          <Col className="cl">
          <div className="one"> 
            <p className="p-no"> 4.</p>
            <img
              src= {Images.Third}
              width="45"
              height="45" 
            />
            <img className="icon-one"
              src= {Images.icon}
              width="20"
              height="20" 
            />
            <p className="p-let"> Extension</p>
            <p className="p-let-no4"> $15,000 </p>
            </div>
            <div className="one"> 
            <p className="p-no"> 5.</p>
            <img
              src= {Images.Fifth}
              width="45"
              height="45"
            />
            <img className="icon-one"
              src= {Images.icon}
              width="20"
              height="20"  
            />
            <p className="p-let"> Barible</p>
            <p className="p-let-no5"> $15,000 </p>
            </div>
            <div className="one"> 
            <p className="p-no"> 6.</p>
            <img
              src= {Images.Fourth}
              width="45"
              height="45"
            />
            <img className="icon-one"
              src= {Images.icon}
              width="20"
              height="20"
            />
            <p className="p-let">  Block</p>
            <p className="p-let-no6"> $15,000 </p>
            </div>
          </Col>

          <Col className="cl">
          <div className="one"> 
            <p className="p-no"> 7.</p>
            <img
              src= {Images.Third}
              width="45"
              height="45" 
            />
            <img className="icon-one"
              src= {Images.icon}
              width="20"
              height="20" 
            />
            <p className="p-let"> Tokens</p>
            <p className="p-let-no7"> $15,000 </p>
            </div>
            <div className="one"> 
            <p className="p-no"> 8.</p>
            <img
              src= {Images.First}
              width="45"
              height="45" 
            />
            <img className="icon-one"
              src= {Images.icon}
              width="20"
              height="20" 
            />
            <p className="p-let"> Adam</p>
            <p className="p-let-no8"> $15,000 </p>
            </div>
            <div className="one"> 
            <p className="p-no"> 9.</p>
            <img
              src= {Images.Second}
              width="45"
              height="45"
            />
            <img className="icon-one"
              src= {Images.icon}
              width="20"
              height="20" 
            />
            <p className="p-let"> Frontier</p>
            <p className="p-let-no9"> $15,000 </p>
            </div>
          </Col>

          <Col>
          <div className="one"> 
            <p className="p-no"> 10.</p>
            <img
              src= {Images.Front}
              width="45"
              height="45" 
            />
            <img className="icon-one"
              src= {Images.icon}
              width="20"
              height="20"
            />
            <p className="p-let"> Sevens </p>
            <p className="p-let-no10"> $15,000 </p>
            </div>
            <div className="one"> 
            <p className="p-no"> 11.</p>
            <img
              src= {Images.First}
              width="45"
              height="45"
            />
            <img className="icon-one"
              src= {Images.icon}
              width="20"
              height="20"
            />
            <p className="p-let">Bombs</p>
            <p className="p-let-no11"> $15,000 </p>
            </div>
            <div className="one"> 
            <p className="p-no"> 12.</p>
            <img
              src= {Images.Fifth}
              width="45"
              height="45"
            />
            <img className="icon-one"
              src= {Images.icon}
              width="20"
              height="20"
            />
            <p className="p-let"> Frontier</p>
            <p className="p-let-no12"> $15,000 </p>
            </div>
          </Col>

          <Col className="cl">
          <div className="one"> 
            <p className="p-no"> 13.</p>
            <img
              src= {Images.Third}
              width="45"
              height="45" 
            />
            <img className="icon-one"
              src= {Images.icon}
              width="20"
              height="20" 
            />
            <p className="p-let"> JazzXR</p>
            <p className="p-let-no13"> $15,000 </p>
            </div>
            <div className="one"> 
            <p className="p-no"> 14.</p>
            <img
              src= {Images.First}
              width="45"
              height="45"
            />
            <img className="icon-one"
              src= {Images.icon}
              width="20"
              height="20"  
            />
            <p className="p-let"> FOMO's</p>
            <p className="p-let-no14"> $15,000 </p>
            </div>
            <div className="one"> 
            <p className="p-no"> 15.</p>
            <img
              src= {Images.Front}
              width="45"
              height="45"
            />
            <img className="icon-one"
              src= {Images.icon}
              width="20"
              height="20"
            />
            <p className="p-let">  G'EVOs</p>
            <p className="p-let-no15"> $15,000 </p>
            </div>
          </Col>
 
        </Row>

      </Container>
    </div>
  );
};
