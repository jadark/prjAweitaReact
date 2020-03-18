import React from 'react';
import styled from "styled-components";

import Badge from "../global/badge/default";
import Card from "../global/card/default";

const ContainerListSection = styled.section`
    margin-bottom: 10px;
    
    .wrapperListSection {
        margin-top: 15px;
        
        .title-listSection {
            color: #444444;
            font-family: 'lemon_milkbold';
            text-transform: uppercase;
        }
    }
    
    @media (min-width: 768px) {
        .wrapperListSection {
            display: flex;
        }
    }
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
             slug={'/tecnologia'}
             format={'f-3'}/>
      <div className="wrapperListSection">
          <div className={'col-6'}>
              <Card data={data} float={false}/>
              <h3 className={'title-listSection'}>{data.title}</h3>
          </div>
          <div className={'col-6'}>
              <Card data={data} float={false}/>
              <h3 className={'title-listSection'}>{data.title}</h3>
          </div>
      </div>

  </ContainerListSection>
}

export default ListSection;