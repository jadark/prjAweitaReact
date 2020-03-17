import React from 'react';
import styled from "styled-components";
import Badge from "../badge/default";

const CardImage = styled.figure`
    position: relative;
    margin: 0;
    img {    
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .card-image {
        border-bottom: ${props => (`12px solid ${props.color ? props.color : "#c0c0c0"}`)}
    }
    
    .card-title {
        bottom: 14%;
        left: 2%;
        margin: 0;
        max-width: 100%;        
        position: absolute;
                   
        a {            
            color: #fff;            
            font-family: 'lemon_milkbold';
            text-decoration: none;
            text-transform: uppercase;
        }
    }
`;

const Card = (props) => {
  const {float} = props;
  const urlImg = 'https://imgmedia.elpopular.pe/310x160/elpopular/original/2020/03/14/5e6d21ef50a9a451291c92ab.jpg';
  let showContent = null,
      colorCard = '#c0c0c0';

  if( props.data && Object.keys(props.data) && Object.keys(props.data).length ) {
    const {data : {color, headline, title, url, slug_img, url_note} = {}} = props;

    if(slug_img && slug_img.length > 0) {
      showContent = <img className={`card-image`}
                         src={slug_img || urlImg}
                         alt={title || `aweita.pe`}
                         title={title || `aweita.pe`}/>
    }

    if( color && color.length > 0 ) {
      colorCard = color;
    }
  }

  return <CardImage className={`comp_global_card`}
                    color={colorCard}>
    {showContent}
    {float ? <>
      <Badge float={true}
             slug={props.data.url}
             color={props.data.color}/>
      <h4 className={'card-title'}>
        <a href={props.data.url.url_note || `#`}>{props.data.title}</a>
      </h4>
    </> : ''}
  </CardImage>
}

export default Card;