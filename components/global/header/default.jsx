import React from 'react';
import styled from "styled-components";

const ContainerHeader = styled.header`
    @media (max-width: 999px) {
        position: fixed;
        width: 100%;
        z-index: 30;
        top: 0;
    }
`;

const WrapperMinisite1000 = styled.div`
    max-width: 1000px;
    width: 100%;
    margin: auto;
    p {
      font-size: 15px;
    }
`;

const Header = () => {
  return <ContainerHeader>
    <WrapperMinisite1000>
      <p>Hola soy un header !!!</p>
    </WrapperMinisite1000>
  </ContainerHeader>
}

export default Header;