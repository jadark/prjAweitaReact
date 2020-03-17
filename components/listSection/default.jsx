import React from 'react';
import styled from "styled-components";

import Badge from "../global/badge/default";
import Card from "../global/card/default";

const ContainerListSection = styled.section`
    margin-bottom: 10px
`

const ListSection = (props) => {
  let data = {
    'color' : '#ff3785',
    'title' : 'xiaomi: las caraceteristicas de sus nuevos modelos de focos',
    'headline' : 'videojuegos',
    'url': '/videojuegos',
    'url_note': '/tecnologia/interna-tecnologia',
    'slug_img': 'https://imgmedia.elpopular.pe/310x160/elpopular/original/2020/03/14/5e6d21ef50a9a451291c92ab.jpg'
  }

  return <ContainerListSection className={'comp_listSection'}>
      <Badge float={false}
             color={'#ff3785'}
             format={'f-1'}/>
      <Card data={data} float={false}/>
  </ContainerListSection>
}

export default ListSection;