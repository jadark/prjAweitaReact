import React from 'react';
import styled from "styled-components";

const ContainerFooter = styled.div`
    background: #eee;
    margin: auto;
    max-width: 1000px;
    width: 100%;
    
    p {
      font-size: 15px;
    }
`;

const Footer = (props) => {
  return <ContainerFooter>
    <p>Soy un footer !!!</p>
  </ContainerFooter>
}

export default Footer;