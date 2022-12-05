import React from "react"
import { Form,Button, Container } from "react-bootstrap"

function Submit (){
   
        return(
            <Container>

        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nama Perusahaan</Form.Label>
                <Form.Control type="company" placeholder="BANK BJB" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Lowongan</Form.Label>
                <Form.Control type="job" placeholder="PRO GAMERS" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>penempatan</Form.Label>
                <Form.Control type="penempatan" placeholder="Bandung" />
            </Form.Group>

        
    </Form>
             
                <Button class="btn btn-primary btn-lg" type="button">Submit</Button>
        
              
            </Container>
            
        );
        
    
}


export default Submit;