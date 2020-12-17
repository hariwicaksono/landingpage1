import React, {Component} from 'react';
import Head from 'next/head';
import Layout, {siteName, siteTitle} from '../components/layout';
import {Container, Navbar, Nav, Button, NavDropdown, Form, FormControl } from 'react-bootstrap';
import Slider from "react-slick";

class Index extends Component{
  render(){
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 2,
      autoplay: true,
      speed: 500
    };
    return(
    <Layout home>
      <Head>
        <title>Create Next App - {siteTitle}</title>
      </Head>
      <header id="header" className="u-header u-header--modern u-header--bordered u-header--bg-transparent u-header--white-nav-links u-header--sticky-top-lg">
      <div className="u-header__section">
      <div id="logoAndNav" className="container-fluid">
      <Navbar expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
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
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</div>
</div>
</header>
      <main>
      <div className="gradient-overlay-half-dark-v3 bg-img-hero" style={{backgroundImage: 'url(images/img4.jpg)'}}>
 
      <div className="d-lg-flex align-items-lg-center height-85vh--lg">
        <div className="container space-2 space-0--lg mt-lg-8">
          <div className="row justify-content-lg-between align-items-lg-center">
            <div className="col-lg-5 mb-7 mb-lg-0">
     
              <span className="d-block text-white text-uppercase mb-2">Join the change</span>
              <h1 className="display-4 font-size-48--md-down text-white mb-0">Space service that moves work forward</h1>

            </div>
          </div>
        </div>
      </div>
    
    </div>

        <Container>
      <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
        </Slider>
        </Container>
    <div className="gradient-overlay-half-primary-v1">
      <div className="bg-img-hero">
        <div className="container">
          <div className="row align-items-lg-center text-center text-lg-left space-2">
            <div className="col-lg-7">
              <h2 className="text-white">Get started with Space</h2>
              <p className="lead text-white mb-0">Space gives you everything you need to manage business, build great stuff, and reach your goals.</p>
            </div>

            <div className="col-lg-5 text-lg-right">
              <a className="btn btn-purple mb-2 mb-sm-0 mr-sm-2">Create Free Account</a>
              <a className="btn btn-light mb-2 mb-sm-0" >Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>

      </main>

      <footer>
        
      </footer>
    </Layout>
  );
}
}

export default Index;