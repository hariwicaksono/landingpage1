import React, {Component} from 'react';
import {Container, Row, Col, Navbar, Nav, Button, NavDropdown, Form, FormControl } from 'react-bootstrap';
import {FaWhatsapp} from 'react-icons/fa';

class Navigation extends Component{
    render(){
        return(
            <>
<Navbar id="header" fixed="top" bg="light" variant="light" expand="lg" className="px-3 shadow header-box-shadow-on-scroll">
     
     <Container>
 <Navbar.Brand href="#home">{this.props.data.brand}</Navbar.Brand>
 <Navbar.Toggle aria-controls="basic-navbar-nav" />
 <Navbar.Collapse id="basic-navbar-nav">
   <Nav className="ml-auto">
     <Nav.Link href="#home">Home</Nav.Link>
     <Nav.Link href="#link">Link</Nav.Link>
     <NavDropdown title="Dropdown" id="basic-nav-dropdown">
       <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
       <NavDropdown.Divider />
       <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
     </NavDropdown>
   </Nav>
   <Form inline>
     <Button variant="outline-success" size="sm"><FaWhatsapp size="1.2rem"/> Whatsapp</Button>
   </Form>
 </Navbar.Collapse>
 </Container>
 
</Navbar>

</>

    );
}
}
        
export default Navigation;