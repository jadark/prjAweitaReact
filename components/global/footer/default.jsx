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

const WrapperInnerFooter = styled.div`
    background: #eee;
    margin: auto;
    width: 100%;
    padding:1rem;
    display:flex;
    .box_brands{
      ul{
        margin:0;
        padding:0;
        list-style:none;
        display: flex;
        li{
          margin:0;
          padding:0 1rem;
          display: flex;
          align-items:center;
          border-left:1px solid #a0a0a0;
          &:first-child{
            border-left:none;
            padding-left:0;
          }
          a{
            display: inline-block;
          }
        }
      }
    }
    .box_social{
      display:block;
      ul{
        margin:0;
        padding:0;
        display:flex;
        list-style:none;
        height: 100%;
        align-items: center;
        /* width: 124%; */
        justify-content: center;
        border-left:1px solid #a0a0a0;
        li{
          margin:0;
          padding:0 0.8rem;
          display: block;
          &:first-child{
            padding-left:1.5rem;
          }
          img{
            max-width:85%;
          }
        }
      }
    }
`;

const Footer = (props) => {
  return <ContainerFooter>
    <WrapperInnerFooter>
      <div className="box_brands">
        <ul>
          <li>
            <a href="http://">
              <img className="icon_band" src={'./images/home/GLR.png'}/>
            </a>
          </li>
          <li>
            <a href="http://">
              <img className="icon_band" src={'./images/home/RTV.png'}/>
            </a>
          </li>
          <li>
            <a href="http://">
              <img className="icon_band" src={'./images/home/la_republica.png'}/>
            </a>
          </li>
          <li>
            <a href="http://">
              <img className="icon_band" src={'./images/home/libero.png'}/>
            </a>
          </li>
          <li>
            <img className="icon_band" src={'./images/home/wapa.png'}/>
          </li>
          <li>
            <a href="http://">
              <img className="icon_band" src={'./images/home/el_popular.png'}/>
            </a>
          </li>
          <li>
            <a href="http://">
              <img className="icon_band" src={'./images/home/cuponidad.png'}/>
            </a>
          </li>
        </ul>
      </div>
      <div className="box_social">
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
      </div>
    </WrapperInnerFooter>
  </ContainerFooter>
}

export default Footer;