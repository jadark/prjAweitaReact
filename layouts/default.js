import React from 'react';
import NextHead from "next/head";
import 'lazysizes';
import styled from "styled-components";

import Footer from "../components/global/footer/default";
import Header from "../components/global/header/default";

const ContainerBody = styled.main`
`;

const WrapperBody = styled.div`
    margin: auto;
    max-width: 1000px;
    width: 100%;
    
    background-color:#fff;
    padding: 20px 20px 10px;
    
    @media (min-width: 768px) {
        padding: 15px 15px 10px;
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
    return (
      <React.Fragment>
        <NextHead>
          <title>Titular</title>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"/>
          <script defer src="https://cdn.jsdelivr.net/npm/intersection-observer@0.7.0/intersection-observer.js"/>
        </NextHead>
        <Header/>
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
