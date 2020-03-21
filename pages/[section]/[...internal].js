import React from 'react';
import Layout from "../../layouts/default";
import ListArticle from "../../components/listArticle/default";
import ContentInternal from "../../components/contentInternal/default";
import HeadlineInternal from "../../components/headlineInternal/default";

const Internal = () => {
  let dataListArticle = {
    'headline' : 'notas relacionadas',
    'slug': '#',
  };

  return <Layout>
    <HeadlineInternal/>
    <div className="wrapperFlex">
      <div className="col-page">
        <ContentInternal/>
        <img src="/images/internal/ads_apotify.jpg" alt=""/>
      </div>
      <div className="col-page">
        <img src={'/images/home/AD_300x600(Middle2).png'}/>
        <ListArticle formatBadge={'f-1'} data={dataListArticle}/>
        <img src={'/images/internal/middle2.png'}/>
      </div>
    </div>
  </Layout>
};

export default Internal;
