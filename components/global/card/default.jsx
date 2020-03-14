import React from 'react';
import styled from "styled-components";

const CardImage = styled.figure`
    img {    
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .card-image {
      border-bottom: ${props => (`12px solid ${props.color ? props.color : "#c0c0c0"}`)}
    }
`;

const Card = (props) => {
  const urlImg = 'https://imgmedia.elpopular.pe/310x160/elpopular/original/2020/03/14/5e6d21ef50a9a451291c92ab.jpg';
  let showContent = null;

  if( props.data && Object.keys(props.data) && Object.keys(props.data).length ) {
    const {data : {color, headline, title, url, slug_img} = {}} = props;

    if(slug_img && slug_img.length > 0) {
      showContent = <img className={`card-image`}
                         src={slug_img || urlImg}
                         alt={title || `aweita.pe`}
                         title={title || `aweita.pe`}/>
    }
  }

  return <CardImage className={`comp_card`}>
    {showContent}
  </CardImage>
}

export default Card;