import React from 'react';
import styled from "styled-components";

import Layout from "../layouts/default";
import Card from "../components/global/card/default";
import ListSection from "../components/listSection/default";
import ListArticle from "../components/listArticle/default";

const Title = styled.h1`
  font-size: 35px;
  color: silver;
`;

const Home = () => {

  let data = {
    'color' : '#fbe967',
    'title' : 'xiaomi: las caraceteristicas de sus nuevos modelos de focos',
    'headline' : 'tecnología',
    'url': '/tecnologia',
    'url_note': '/tecnologia/interna-tecnologia',
    'slug_img': 'https://imgmedia.elpopular.pe/310x160/elpopular/original/2020/03/14/5e6d21ef50a9a451291c92ab.jpg'
  }

  return <Layout>
    <Title>Home Page</Title>
    <img src={'./images/home/ads_middle.jpg'}/>
    <div className="wrapperFlex">
      <div className="col-page">
        <h2>COLUMNA 1</h2>
        <Card data={data} float={false}/>
        <ListSection/>
        <ListSection/>
        <ListSection/>
        <ListSection/>
      </div>
      <div className="col-page">
        <h2>columna 2</h2>
        <ListArticle/>
        <img src={'./images/home/AD_300x600(Middle2).png'}/>
        <ListArticle/>
        <img src={'./images/home/AD_300x250_2.png'}/>
      </div>
    </div>
  </Layout>
}

export default Home
