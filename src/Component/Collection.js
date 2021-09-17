import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import { DATA } from '../Shared/data';

class Collection extends Component{
    constructor(props){
        super(props);
   
    this.state = {
        collect: DATA

    };
    }
    render(){
        const collect =this.state.collect.map((detail)=> {
               return( 
                   <Col>
                <div key = {detail.id} className="detail-main">
                    <b> {detail.number}</b>
                    <img className="detail-img"
                    
                    src={detail.image}
                    alt={detail.name}
                />
                <p>{detail.name}</p>
                </div>
                </Col>
               );
               
        }) ;

        return(
            <Container>
                <Row>
                    {collect}
                </Row>
            </Container>
        );
    }
}
export default Collection;