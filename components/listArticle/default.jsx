import React from 'react';
import MediaObject from "../mediaObject/default";
import Badge from "../global/badge/default";

const ListArticle = (props) => {
    let articleHeadline;
    let articleFormat;

    if( props.data && props.data.headline && props.data.headline.length > 0 ){
        const {data: {headline} = {}} = props;
        articleHeadline = headline;
    } else {
        articleHeadline = 'tecnologia'
    }

    if( props.formatBadge && props.formatBadge.length > 0 ) {
        const {formatBadge} = props;
        articleFormat = formatBadge;
    } else {
        articleFormat = 'f-2';
    }


    return <article className={'comp_listArticle'}>
        <Badge float={false}
               headline={articleHeadline}
               slug={'/tecnologia'}
               format={articleFormat}/>
        <MediaObject format={'f-1'}/>
        <MediaObject format={'f-1'}/>
        <MediaObject format={'f-1'}/>
        <MediaObject format={'f-1'}/>
    </article>
};

export default ListArticle;