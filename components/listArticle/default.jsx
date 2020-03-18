import React from 'react';
import MediaObject from "../mediaObject/default";
import Badge from "../global/badge/default";

const ListArticle = (props) => {
    return <article className={'comp_listArticle'}>
        <Badge float={false}
               slug={'/tecnologia'}
               format={'f-2'}/>
        <MediaObject/>
    </article>
};

export default ListArticle;