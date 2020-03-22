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
    background-color: white;
    display: flex;
    p {
      font-size: 15px;
    }
`;

const WrapperLogo = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  background-color: #242424;
  color:#fff;
  padding:1.5rem;
  position: relative;
  &:after{
    content: '';
    background-color: transparent;
    width: 0;
    height: 0;
    border-top: 96px solid #fff;
    border-left: 30px solid transparent;
    position: absolute;
    top: 0;
    right: 0;
  }
  .logo{
    padding-left:2.5rem;
    display: block;
  }
`;

const WrapperSocial = styled.div`
  background-color: white;
  position: relative;
  &:after{
    content: '';
    background-color: transparent;
    width: 0;
    height: 0;
    border-top: 96px solid #eeeeee;
    border-left: 30px solid transparent;
    position: absolute;
    top: 0;
    right: 0;
  }
  ul{
    margin:0;
    padding:0;
    list-style:none;
    display: flex;
    align-items:center;
    height: 100%;
    li{
      margin:0;
      padding:0 1.4rem;
      display: inline-block;
      line-height:1;
      position: relative;
      bottom:-4px;
      a{
        display:inline-block;
        line-height:1;
      }
      &:last-child{
        padding-right:2.6rem;
      }
    }
  }
`;

const WrapperSearch = styled.div`
  background-color: #eeeeee;
  position: relative;
  align-items:center;
  display: flex;
  padding:0 1.5rem 0 1rem;
  .fa-search{
    font-size:1.8rem;
  }
`;

const Header = () => {
  return <ContainerHeader>
    <WrapperMinisite1000>
      <WrapperLogo>
        <img className="logo" src={'./images/home/aweita_logo.png'}/>
      </WrapperLogo>
      <WrapperSocial>
        <ul>
          <li>
            <a href="http://">
              <img className="icon_facebook" src={'./images/home/logo_facebook.svg'}/>
            </a>
          </li>
          <li>
            <a href="http://">
              <img className="icon_twitter" src={'./images/home/logo_twitter.svg'}/>
            </a>
          </li>
          <li>
            <a href="http://">
              <img className="icon_instagram" src={'./images/home/logo_instagram.svg'}/>
            </a>
          </li>
        </ul>
      </WrapperSocial>
      <WrapperSearch>
        <i className="fa fa-search"></i>
      </WrapperSearch>
    </WrapperMinisite1000>
  </ContainerHeader>
}

export default Header;