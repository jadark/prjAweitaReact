import React from 'react';
import styled from "styled-components";
import Card from "../global/card/default";
import Badge from "../global/badge/default";

const ContainerMediaObject = styled.div`
    display: flex;
    margin: 10px 0;
    
    .comp_global_card {        
        margin-right: 10px;
    }
    
    .wrapperMediaObject {
        h4 {
            color: #444444;
            font-family: 'lemon_milkbold';
            font-size: 10px;
            line-height: 1.4;
            text-transform: uppercase;
        }
    }
`;

const MediaObject = () => {
  let data = {
    'color' : '#ff3785',
    'title' : 'xiaomi: las caraceteristicas de sus nuevos modelos de focos',
    'headline' : 'videojuegos',
    'url': '/videojuegos',
    'url_note': '/tecnologia/interna-tecnologia',
    'slug_img': './images/internal/img_note_related.jpg'
  }
    return <ContainerMediaObject className={'comp_mediaObject'}>
        <Card data={data} float={false}/>
        <div className="wrapperMediaObject">
          <Badge float={false}
                 color={'#ff3785'}
                 slug={'/tecnologia'}/>
          <h4>{data.title}</h4>
        </div>
    </ContainerMediaObject>
};

export default MediaObject;