
import React, { Component } from "react";
import {  Container } from "react-bootstrap";

import Monitoring from "../HR/Monitoring";
import axios from 'axios';



class MonLoker extends Component{
  

    handleRemove=async (data)=>{
       
        await axios.delete(`http://localhost:8000/posts/${data}`)
        this.props.getdata();
    }

    
 

render(){
    
         return(
            <Container>
             
                {(<Monitoring  data={this.props.data} remove={this.handleRemove} update={this.props.updatedata}/>)
                       
                     
                    } 
            </Container>
        )
    }
}

export default MonLoker;