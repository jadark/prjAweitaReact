import React from 'react';
import styled from "styled-components";
import Badge from "../global/badge/default";

const ContainerHeadline = styled.div`
    ul {
        list-style: none;
        margin: 0;        
        text-align: center;
        padding: 0;        
        
        li {
            display: inline-block;
            margin-right: 10px;
        }
    }
    
    .wrapperHeadline {
        h1 {
            font-family: 'lemon_milkbold';
            letter-spacing: 3px;
            text-transform: uppercase;
        }
        
        p {
            font-family: 'Roboto', sans-serif;
        }
        
        a {
            color: #ff8a00;
            font-family: 'Roboto', sans-serif;       
            font-weight: bold;
        }
    }
`;

const HeadlineInternal = (props) => {
    return <ContainerHeadline className={'comp_headlineInternal'}>
      <ul>
        <li>
          <Badge float={false}
                 color={'#fbe966'}
                 headline={'mark hamll'}
                 slug={'/mark-hamll'}/>
        </li>
        <li>
          <Badge float={false}
                 color={'#fbe966'}
                 headline={'netflix'}
                 slug={'/netflix'}/>
        </li>
        <li>
          <Badge float={false}
                 color={'#fbe966'}
                 headline={'the witcher'}
                 slug={'/the-witcher'}/>
        </li>
      </ul>
      <div className="wrapperHeadline">
        <h1>¿Luke Skywalker en la segunda temporada de la serie The Witcher? esto dice el actor</h1>
        <p>Gracias a la popularidad de la serie <a href="#">The Witcher en Netflix</a>, los usuarios popularizaron un tuit en donde el recordado Luke Sywalker comentó que el papel de Vesemir podría quedarle muy bien.</p>
      </div>

    </ContainerHeadline>
};

export default HeadlineInternal;