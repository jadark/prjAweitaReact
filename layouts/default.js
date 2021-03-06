import React from 'react';
import NextHead from "next/head";
import 'lazysizes';
import styled from "styled-components";

import Footer from "../components/global/footer/default";
import Header from "../components/global/header/default";

const ContainerBody = styled.main`
  @font-face {
    font-family: 'lemon_milkbold';
    src: url('/fonts/lemonmilk-bold-webfont.woff2') format('woff2'),
        url('/fonts/lemonmilk-bold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'FontAwesome';
    src: url('/fonts/fontawesome-webfont.eot');
    src: url('/fonts/fontawesome-webfont.eot?#iefix') format('embedded-opentype'),
        url('/fonts/fontawesome-webfont.woff2') format('woff2'),
        url('/fonts/fontawesome-webfont.woff') format('woff'),
        url('/fonts/fontawesome-webfont.ttf') format('truetype'),
        url('/fonts/fontawesome-webfont.svg#fontawesomeregular') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  *{
    box-sizing: border-box;
  }
`;

const WrapperBody = styled.div`
    background-color:#fff;
    margin: auto;
    max-width: 1000px;
    padding: 20px 20px 10px;
    width: 100%;
    
    .wrapperFlex {
      position: relative;      
    }
    
    .col-6 {
        flex-grow: 0.96875;
        flex-basis: 0;
        
        &:last-child {
            flex-grow: 2;
        }
    }
    
    @media (min-width: 768px) {
        padding: 15px 15px 10px;
        
        .wrapperFlex {
            display: flex;
        }
        
        .col-page {
            flex-grow: 1.8824;
            flex-basis: 0;
            margin-right: 20px;
            &:last-child {
                flex-grow: 0.5;
                margin-right: 0;
            }
            h2{
              color:coral;
              font-family: 'lemon_milkbold';
            }
        }
        
        .col-6 {
            margin-right: 20px;
            
            &:last-child {
                flex-grow: 2;
                margin-right: 0;
            }
        }
    }
    
    @media (min-width: 999px) {
    
    }
    
    
`;

export default class DefaultLayout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataAlertWeb: [],
    };
  }

  componentDidMount() {
  }

  render() {
    let dataHeader = null;

    if( this.props.data ) {
      dataHeader = this.props.data;
    }

    return (
      <React.Fragment>
        <NextHead>
          <title>Titular</title>
          <meta name="viewport" content="width=device-width, user-scalable=no"/>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"/>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v4.7.0/css/font-awesome-css.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet"></link>
          <script defer src="https://cdn.jsdelivr.net/npm/intersection-observer@0.7.0/intersection-observer.js" />
        </NextHead>
        <Header data={dataHeader}/>
        <ContainerBody>
          <WrapperBody>
            {this.props.children}
          </WrapperBody>
          <Footer/>
        </ContainerBody>
      </React.Fragment>
    );
  }

}
