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
      centerMode: true,
      centerPadding: '200px',
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      arrows: false,
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  centerMode: true,
                  centerPadding: '160px',
                  slidesToShow: 1
              }
          },
          {
              breakpoint: 768,
              settings: {
                  centerMode: true,
                  centerPadding: '80px',
                  slidesToShow: 1
              }
          },
          {
              breakpoint: 576,
              settings: {
                  centerMode: true,
                  centerPadding: '20px',
                  slidesToShow: 1
              }
          }
      ]
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
            <img className="slick-image mx-xl-2 mx-lg-2 mx-md-2 mx-sm-1 mx-1 rounded" src="https://api.ternaknesia.com/storage/master/app_slider/PDgiXl8HJQzfb5JH25DE.jpeg" alt="" />
            </div>
            <div>
            <img className="slick-image mx-xl-2 mx-lg-2 mx-md-2 mx-sm-1 mx-1 rounded" src="https://api.ternaknesia.com/storage/master/app_slider/J309o7XSPdrGSqsKmWrb.jpg" alt="" />
            </div>   
            <div>
          <img className="slick-image mx-xl-2 mx-lg-2 mx-md-2 mx-sm-1 mx-1 rounded" src=" https://api.ternaknesia.com/storage/master/app_slider/z5BgfVbKY2aCkchT5EWq.jpg" alt="" /> 
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