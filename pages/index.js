import React, {Component} from 'react';
import Head from 'next/head';
import Layout, {siteName, siteTitle} from '../components/layout';
import {Container } from 'react-bootstrap';
import Slider from "react-slick";
import API from '../libs/axios';
import Navbar from '../components/navbar';
import Intro from '../components/intro';
import Layanan from '../components/layanan';

class Index extends Component{
  constructor(props) {
    super(props)
    this.state = {
      Navbar: {},
      Intro: {},
      Layanan: [],
        loading: true
    }
  
}
    componentDidMount() {
      API.GetData().then(res => {
        this.setState({
            Navbar: res.data[0].Navbar,
            Intro: res.data[0].Intro,
            Layanan: res.data[0].Layanan,
        })
    })
   
  }
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
        <title>Landing Page #1 - {siteTitle}</title>
      </Head>
      
      <Navbar data={this.state.Navbar}/>
      <Intro data={this.state.Intro}/>
      <Layanan data={this.state.Layanan}/>

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



      <footer>
        
      </footer>
    </Layout>
  );
}
}

export default Index;