import React from 'react';
import styled from "styled-components";

import Layout from "../layouts/default";
//import Card from "../components/global/card/default";
import ListSection from "../components/listSection/default";
import ListArticle from "../components/listArticle/default";
import Spotlight from "../components/spotlight/default";
import OutstandingNews from "../components/outstandingNew/default";

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
  };

  let dataMoreViews = {
    'headline' : 'lo más visto',
    'slug': '#',
  };

  let dataAnalysis = {
    'headline' : 'Análisis',
    'slug': '#',
  };

  return <Layout>
    <Spotlight/>
    <img src="./images/home/ads_top.jpg" alt=""/>
    <OutstandingNews/>
    <img src={'./images/home/ads_middle.jpg'}/>
    <div className="wrapperFlex">
      <div className="col-page">
        {/*<Card data={data} float={false}/>*/}
        <ListSection/>
        <ListSection/>
        <ListSection/>
        <ListSection/>
      </div>
      <div className="col-page">
        <ListArticle data={dataMoreViews}/>
        <img src={'./images/home/AD_300x600(Middle2).png'}/>
        <ListArticle data={dataAnalysis}/>
        <img src={'./images/home/AD_300x250_2.png'}/>
      </div>
    </div>
  </Layout>
}

export default Home;
