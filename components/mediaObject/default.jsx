import React from 'react';
import Card from "../global/card/default";
import Badge from "../global/badge/default";

const MediaObject = () => {
  let data = {
    'color' : '#ff3785',
    'title' : 'xiaomi: las caraceteristicas de sus nuevos modelos de focos',
    'headline' : 'videojuegos',
    'url': '/videojuegos',
    'url_note': '/tecnologia/interna-tecnologia',
    'slug_img': './images/internal/img_note_related.jpg'
  }
    return <div className={'comp_mediaObject'}>
        <Card data={data} float={false}/>
        <Badge float={false}
               color={'#ff3785'}
               slug={'/tecnologia'}/>
        <h4>{data.title}</h4>
    </div>
};

export default MediaObject;