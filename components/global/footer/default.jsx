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
    padding:1.5rem 1.1rem;
    display:flex;
    box-sizing: border-box;
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
          img{
            display: inline-block;
            max-width:90%;
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
          &:last-child{
            padding-right:0;
          }
          img{
            max-width:85%;
            opacity:0.75;
          }
        }
      }
    }
`;

const WrapperMainHeader = styled.div`
  width:100%;
  display:flex;
  padding: 1.5rem 1.1rem;
  border-top:1px solid #b5b3b5;
  .wrapper_list{
    display: flex;
    flex-basis: 0;
    flex-grow: 0.76;
    border-right:1px solid #b5b3b5;
  }
  ul.list{
    margin:0;
    padding:0;
    list-style:none;
    padding:0 0.8rem;
    &:first-child{
      padding-left:0;
    }
    li{
      margin:0;
      padding:0.3rem 0;
      font-family: 'Roboto', sans-serif;
      font-weight:700;
      font-size:12px;
      color:#535353;
      line-height:1;
      a{
        font-family: 'Roboto', sans-serif;
        color:#535353;
        font-weight:700;
        text-decoration:none;
        display: inline-block;
        line-height:1;
      }
    }
  }
  .wrapper_logo{
    flex-grow: 0.24;
    flex-basis: 0;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-flow: wrap;
    img{
      display: inline-block;
      padding-left: 1.7rem;
    }
    .copyright{
      margin:0;
      line-height:1;
      font-size:11.5px;
      color:#535353;
      padding-left: 1.7rem;
      font-family: 'Roboto', sans-serif;
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
    <WrapperMainHeader>
      <div className="wrapper_list">
        <ul className="list">
          <li><a href="http://">Doménica Delgado</a></li>
          <li><a href="http://">El Artista del Año</a></li>
          <li><a href="http://">Gino Pesaressi</a></li>
        </ul>
        <ul className="list">
          <li><a href="http://">Isabel Acevedo</a></li>
          <li><a href="http://">Paolo Guerrero</a></li>
          <li><a href="http://">Vania Bludau</a></li>
        </ul>
        <ul className="list">
          <li><a href="http://">El valor de la verdad</a></li>
          <li><a href="http://">Christian Domínguez</a></li>
          <li><a href="http://">Jefferson Farfán</a></li>
        </ul>
        <ul className="list">
          <li><a href="http://">Abuso sexual</a></li>
          <li><a href="http://">Sexto sentido</a></li>
          <li><a href="http://">Salud</a></li>
        </ul>
        <ul className="list">
          <li><a href="http://">Belleza</a></li>
          <li><a href="http://">Manualidades</a></li>
          <li><a href="http://">Orientación y Familia</a></li>
        </ul>
        <ul className="list">
          <li><a href="http://">Nutrición</a></li>
          <li><a href="http://">Receta popular</a></li>
          <li><a href="http://">Términos de uso</a></li>
        </ul>
      </div>
      <div className="wrapper_logo">
        <img src={'./images/home/aveita_logo_footer.png'} />
        <p className="copyright">©Todos los derechos reservados - 2020</p>
      </div>
    </WrapperMainHeader>
  </ContainerFooter>
}

export default Footer;