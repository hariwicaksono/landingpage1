import React, {Component} from 'react';
import Link from 'next/link';
import {Container, Row, Col, Navbar, Nav, Button, NavDropdown, Form, FormControl } from 'react-bootstrap';

class Intro extends Component{
    render(){
        return(
            <>
     <div className="d-lg-flex position-relative" style={{backgroundImage: 'url(images/OI000007-01.jpeg)', backgroundSize: 'cover'}}>

     <div className="container d-lg-flex align-items-lg-center space-top-2 space-lg-0 min-vh-lg-100">
       <div className="w-md-100">
         <Row>
           <Col md="5">
           <div className="mb-5 mt-11">
             <h1 className="d-block display-4 mb-3 text-white">{this.props.data.title}</h1>
             <p className="lead text-white">{this.props.data.paragraph}</p>
             <Link href="" passHref>
             <a className="btn btn-primary btn-wide transition-3d-hover">Mari Mulai</a>
             </Link>
           </div>
           </Col>
         </Row>
       </div>
     </div>
   
   </div>
</>

    );
}
}
        
export default Intro;