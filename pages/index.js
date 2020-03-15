import React from 'react';
import styled from "styled-components";

import Layout from "../layouts/default";
import Card from "../components/global/card/default";

const Title = styled.h1`
  font-size: 35px;
  color: silver;
`

const Home = () => {

  let data = {
    'color' : '#fbe967',
    'headline' : 'xiaomi: las caraceteristicas de sus nuevos modelos de focos',
    'title' : 'tecnología',
    'url': '/tecnologia',
    'slug_img': 'https://imgmedia.elpopular.pe/310x160/elpopular/original/2020/03/14/5e6d21ef50a9a451291c92ab.jpg'
  }

  return <Layout>
    <Title>Home Page</Title>
    <div className="wrapperFlex">
      <div className="col-page">
        <h2>COLUMNA 1</h2>
        <Card data={data}/>
      </div>
      <div className="col-page">
        <h2>columna 2</h2>
        <Card data={data}/>
      </div>
    </div>
  </Layout>
}

export default Home
