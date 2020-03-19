import React from 'react';
import Layout from "../../layouts/default";
import ListArticle from "../../components/listArticle/default";
import MediaObject from "../../components/mediaObject/default";

const Section = () => {
  return <Layout>
    <h1>Section Page</h1>
    <div className="wrapperFlex">
      <div className="col-page">
        <h2>columna 1</h2>
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
