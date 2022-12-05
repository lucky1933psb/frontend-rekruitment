import React from "react";
import {Nav,Navbar,Button,Container} from 'react-bootstrap'

function NavbarComp() {
    
        return(
            <Navbar bg="light" expand="lg">
            <Container >
              <Navbar.Brand href="#">Inalah LOKER</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link href="#action1">FIND</Nav.Link>
                  <Nav.Link href="#action2">NEWS</Nav.Link>
                  <Nav.Link href="#action2">ABOUT</Nav.Link>
                               
                </Nav>
               
                  <Button variant="outline-submit">Login</Button>
                  <Button variant="outline-submit">Sign Up</Button>
                  
                
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
    
    
   
}

export default NavbarComp;