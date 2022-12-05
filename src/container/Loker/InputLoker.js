
import React, { Component } from "react";
import {  Container,Row,Col,Nav,Card } from "react-bootstrap";
import axios from 'axios';
import './InputLoker.css';
import authHeader from "../../Utils/Authheader";





class InputLoker extends Component{
    // state={
    //     formBlogPost:[]
    // }
    state={
        post:[],
        formBlogPost:{
            id:1,
            title:'',
            body:'',
            userid:1
        },
        isUpdate:false
    }

    postDataToAPI=()=>{
        axios.post('http://localhost:3000/products',this.props.formdata, { headers: authHeader() } ).then((res)=>{
            this.props.getdata();
            this.props.reset();
            
            
    },(err)=>{  
        console.log('error: '.err);
        })
   
    }

    putDataToAPI=()=>{
        axios.put(`http://localhost:8000/posts/${this.props.formdata.id}`,this.props.formdata).then((res)=>{
            this.props.getdata();
            this.props.reset();
           
        })
    }

    // handleRemove=(data)=>{
       
    //     axios.delete(`http://localhost:8000/posts/${data}`)
    //     this.props.getdata();
    // }

    // handleUpdate=(data)=>{
    //     this.setState({
    //         formBlogPost: data,
    //         isUpdate: true
    //     });
    // }

    // handleFormChange =(event)=>{
    //     let formBlogPostnew={...this.state.formBlogPost};
    //     let timestamp = new Date().getTime();
    //     if(!this.state.isUpdate){
    //         formBlogPostnew['id']=timestamp;
    //     }
    //     formBlogPostnew[event.target.name] =event.target.value;
    //     this.setState({
    //         formBlogPost:formBlogPostnew
    //     })
    // }
    handleSubmit=()=>{
        if(this.props.isUpdate){
            this.putDataToAPI()
        }else{
            this.postDataToAPI();
        }
       
    }
    

 

render(){
    
         return(
            <Container>
            <Row>
            <Col className="col-md-2">
         <Nav defaultActiveKey="/home" className="flex-column">
          
         <Card >
         <Card.Img variant="top" src="" />
        </Card>
          <Nav.Link href=" ">Input Loker</Nav.Link>
          <Nav.Link eventKey="Apllying">Monitoring Loker</Nav.Link>
          <Nav.Link eventKey="Notif">Monitoring User</Nav.Link>
          <Nav.Link eventKey="Logout">Logout</Nav.Link>
          
          </Nav>
        </Col>
                <Col className="col-md-10">
                     <p className='section-title'> --INPUT LOKER--</p>
                     <hr></hr>
                     <hr></hr>
                     <div className='form-add-post'>
                     <label htmlFor="title">Logo Perusahaan</label>
                    <Card >
                       <Card.Img variant="top" src=" + " /> +
                    </Card>    
                    <label htmlFor="title">Nama Perusahaan</label>
                        <input type="text" value={this.props.formdata.nama_perusahaan} name='nama_perusahaan' placeholder='add title' onChange={this.props.formEvent}/>
                    <label htmlFor="body">Posisi</label>
                        <input type="body" value={this.props.formdata.posisi} name='posisi' placeholder='add body'   onChange={this.props.formEvent}></input>
                    <label htmlFor="title">Penempatan</label>
                    <input type="body" value={this.props.formdata.lokasi} name='lokasi' placeholder='add body'   onChange={this.props.formEvent}></input>
                    <label htmlFor="title">Deskripsi</label>
                    <input type="body" value={this.props.formdata.description} name='description' placeholder='add body'   onChange={this.props.formEvent}></input>
                    <button className='btn-submit' onClick={this.handleSubmit}>simpan</button>
                </div>
                </Col>
            </Row>
                
            </Container>
        )
    }
}

export default InputLoker;