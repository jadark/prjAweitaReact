import React from 'react';
import styled from "styled-components";
import Card from "../global/card/default";
import Badge from "../global/badge/default";

const ContainerMediaObject = styled.div`    
    margin: ${props => (`${props.format === 'f-2' ? `0` : `10px 0`}`)};
    border-bottom: ${props => (`${props.format === 'f-2' ? `1px solid #eeeeee` : `none`}`)};
    padding: ${props => (`${props.format === 'f-2' ? `15px 0` : `0`}`)};
    
    .comp_global_card {        
        margin-right: 10px;
    }
    
    .wrapperMediaObject {
        h4 {
            color: #444444;
            font-family: 'lemon_milkbold';
            font-size: ${props => (`${props.format === 'f-2' ? `14px` : `10px`}`)};
            margin: ${props => (`${props.format === 'f-2' ? `0 0 8px 0` : `15px 0`}`)};            
            line-height: 1.4;
            text-transform: uppercase;
        }
        
        .date-publish {
            color: #777777;
            display: block;
            font-family: 'Roboto', sans-serif;
            font-size: 12px;
            margin-bottom: 8px;
            text-transform: uppercase;
        }
        
        p {
            color: #444444;
            font-family: 'Roboto', sans-serif;
            margin: 0;
        }
    }
    
    @media (min-width: 768px) {
        display: flex;
    }
`;

const MediaObject = (props) => {
    let data = {
        'color' : '#ff3785',
        'title' : 'xiaomi: las caraceteristicas de sus nuevos modelos de focos',
        'headline' : 'videojuegos',
        'url': '/videojuegos',
        'url_note': '/tecnologia/interna-tecnologia',
        'slug_img': '/images/internal/img_note_related.jpg',
    };

    let data2 = {
        'color' : '#ff3785',
        'title' : 'María Pía Copello lamenta el comportamiento de Christian Domínguez y respalda a Isabel Acevedo tras el fin de su relación',
        'headline' : 'videojuegos',
        'body' : 'María Pía Copello le jala las orejas a Christian Domínguez y le recomienda que siente cabeza tras terminar con Isabel Acevedo.',
        'url': '/videojuegos',
        'url_note': '/tecnologia/interna-tecnologia',
        'slug_img': '/images/section/Media-Object-Section.png',
    };
    let showImage = null;
    let showTitle = null;
    let showBody = null;
    let showBadge = null;
    let showPublish = null;

    if(props.format === 'f-1') {
        showImage = <Card data={data} float={false}/>;
        showTitle = <h4>{data.title}</h4>;
        showBadge = <Badge float={false}
                           color={'#ff3785'}
                           slug={'/tecnologia'}/>;
    } else if (props.format === 'f-2') {
        showImage = <Card data={data2} float={false}/>;
        showTitle = <h4>{data2.title}</h4>;
        showBody = <p>{data2.body}</p>;
        showPublish = <time className={'date-publish'}>04:29 pm.</time>
    }

    return <ContainerMediaObject className={'comp_mediaObject'}
                                 format={props.format}>
        {showImage}
        <div className="wrapperMediaObject">
            {showBadge}
            {showPublish}
            {showTitle}
            {showBody}
        </div>
    </ContainerMediaObject>
};

export default MediaObject;