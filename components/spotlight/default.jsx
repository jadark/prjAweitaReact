import React from 'react';
import styled from "styled-components";
import Card from "../global/card/default";

const ContainerSpotlight = styled.div`
    margin-bottom: 10px;
    .comp_global_card {
        font-size: 11px;
        margin-right: 10px;
    }
    @media (min-width: 768px) {
        display: flex;
    }
`;

let data = {
  'color' : '#fbe967',
  'title' : '¡Nuevo tráiler! Crisis en Tierras Infinitas muestra a Bruce Wayne y Demonios Sombra',
  'headline' : 'tecnología',
  'url': '/tecnologia',
  'url_note': '/tecnologia/interna-tecnologia',
  'slug_img': '/images/home/img_spotlight_top.jpg'
}

const Spotlight = (props) => {
    return <ContainerSpotlight className={'comp_spotlight'}>
        <Card data={data} float={true}/>
        <Card data={data} float={true}/>
        <Card data={data} float={true}/>
        <Card data={data} float={true}/>
    </ContainerSpotlight>
};

export default Spotlight;