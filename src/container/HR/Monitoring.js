import React from "react"
import {  Button, Container,Table,Col,Row,Nav,Card } from "react-bootstrap"





const Monitoring=(props)=>{
      console.log(props.data)
        return(
          <Container>
            <Row>
            <Col className="col-md-2">
         <Nav defaultActiveKey="/home" className="flex-column">
          
         <Card >
         <Card.Img variant="top" src=" + " />
        </Card>
          <Nav.Link href=" ">Input Loker</Nav.Link>
          <Nav.Link eventKey="Apllying">Monitoring Loker</Nav.Link>
          <Nav.Link eventKey="Notif">Monitoring User</Nav.Link>
          <Nav.Link eventKey="Logout">Logout</Nav.Link>
          
          </Nav>
        </Col>

              <Col className="Col-md-4">
              <Table striped bordered hover>
              <thead className="tabelComp">
                <tr>
                  <th >No</th>
                  <th >Nama Perusahaan</th>
                  <th >Posisi</th>
                  <th >Penempatan</th>
                  
                </tr>
              </thead>
              <tbody>
              {props.data && props.data.map((Post,i) =>{
                       return(
                        
                       
                <tr>
              <td >{i+1}</td>
              <td >{Post.nama_perusahaan}</td>
              <td >{Post.posisi}</td>
              <td >{Post.lokasi}</td>
             
              <td colSpan={2}>
                <Button className="remove" onClick={()=>props.remove(Post.id)}>Delete</Button>
                <Button className="update" onClick={()=>props.update(Post)}>Update</Button>
              </td>
            </tr>
                       )
})

    }
      </tbody>
  </Table>
              </Col>
            </Row>
             
          </Container>
          )
  } 

export default Monitoring;

