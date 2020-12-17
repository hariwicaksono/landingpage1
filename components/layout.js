import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
//import Navbar from './navbar';
//import Sidebar from './sidebar';
//import Footer from './footer';
//import { Container } from 'react-bootstrap';
//import {isLogin, isAdmin} from '../libs/utils';

export const siteName = 'Landing Page'
export const siteTitle = 'Landing Page App #1'

class Layout extends Component {

  render() {
    const { children, home } = this.props;

  return (
    <>
    <Head>  
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
    <meta name="description" content="" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>

    <div>
    {!home ? 
    <>
    <Link href="/" passHref>
        <a>← Kembali</a>
    </Link>
      {children}
    </>
    :
    <>
      {children}
    </>
    }
    </div>
    </>
  );
  }
}
export default Layout;
