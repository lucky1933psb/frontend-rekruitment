import React from "react";
import { useNavigate } from "react-router-dom";
import {Nav,Navbar,Button,Container} from 'react-bootstrap';

function NavbarComp() {
  const Navigate = useNavigate();
  function masuk(){
    Navigate("/Login")
  }
  function keluar(){
    Navigate("/FormSignUp")
  } 
    
        return(
            <Navbar bg="dark" variant="dark">
            <Container >
              <Navbar.Brand href="#">Inalah LOKER</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="justify-content-end flex-grow-1 pe-3 my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link href="#action1">FIND</Nav.Link>
                  <Nav.Link href="#action2">NEWS</Nav.Link>
                  <Nav.Link href="#action2">ABOUT</Nav.Link>
                               
                </Nav>

               
                  <Button onClick={masuk} className="me-2" variant="outline-success">Login</Button>
                  <Button onClick={keluar} variant="outline-success">Sign Up</Button>
                  
                
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
    
    
   
}

export default NavbarComp;