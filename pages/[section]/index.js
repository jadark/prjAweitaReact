import React from 'react';
import Layout from "../../layouts/default";
import ListArticle from "../../components/listArticle/default";
import MediaObject from "../../components/mediaObject/default";
import Spotlight from "../../components/spotlight/default";
import GridSection from "../../components/gridSection/default";

const Section = () => {
  let dataHeader = {
    'slug': 'tecnologia',
  };

  return <Layout data={dataHeader}>
    <Spotlight/>
    <img src="./images/home/ads_top.jpg" alt=""/>
    <GridSection/>
    <div className="wrapperFlex">
      <div className="col-page">
        <MediaObject format={'f-2'}/>
        <MediaObject format={'f-2'}/>
        <MediaObject format={'f-2'}/>
        <MediaObject format={'f-2'}/>
        <MediaObject format={'f-2'}/>
        <MediaObject format={'f-2'}/>
        <MediaObject format={'f-2'}/>
        <MediaObject format={'f-2'}/>
        <MediaObject format={'f-2'}/>
        <MediaObject format={'f-2'}/>
        <MediaObject format={'f-2'}/>
        <MediaObject format={'f-2'}/>
        <MediaObject format={'f-2'}/>
        <MediaObject format={'f-2'}/>
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

export default Section
