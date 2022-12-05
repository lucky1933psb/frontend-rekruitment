
import React, { Component } from "react";
import { Row,Col, Container } from "react-bootstrap";

// import { Button,Card,Container } from "react-bootstrap";
import SubmitLoker from "../../component/SubmitLoker";


// import './Loker.css'



class Loker extends Component{
  

   
render(){
    
         return(
            <Container>
                 <Row>
                   {this.props.data && this.props.data.map(Post =>{
                       return(<Col sm="3"><SubmitLoker key={Post.id} data={Post} /></Col>)
                     })
                    } 

                    

                </Row>
               
            </Container>
        )
    }
}

export default Loker;