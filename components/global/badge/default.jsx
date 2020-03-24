import React from 'react';
import styled from "styled-components";

const BadgeStx = styled.a`
  display: ${props => (`${props.format ? `block` : `table`}`)};
  padding: ${props => (`${props.format ? `22px 15px` : `4px 8px`}`)};
  text-decoration: none;
  font-family: 'lemon_milkbold';
  font-size: ${props => (`${props.format ? `18px` : `9px`}`)};
  color: ${props => (`${props.format ? `#fff` : `#000`}`)};  
  text-transform: uppercase;
  background-color: ${props => (`${props.format ? `#242424` : props.color }`)};
  position: ${props => (`${props.float ? `absolute` : `relative`}`)};
  left: ${props => (`${props.float ? `2%` : `0` }`)};
  bottom: ${props => (`${props.float ? `50%` : `0` }`)};
  margin-left: ${props => (`${props.format === 'f-3' ? `-15px` : `0`}`)};
  &:after {
    content: '';
    background-color: ${props => (`${props.format === 'f-3' ? `#ff3785` : `transparent`}`)};
    width: ${props => (`${props.format === 'f-3' ? `20px` : `0`}`)};
    height: ${props => (`${props.format === 'f-3' ? `64px` : `0`}`)};
    border-top: ${props => (`${props.format === 'f-2' ? `64px solid #FFF` : ``}`) };
    border-left: ${props => (`${props.format === 'f-2' ? `40px solid transparent` : ``}`) };
    position: absolute;
    top: 0;
    right: 0; 
  }
`;

//firstCheck ? "Acceso Denegado" : secondCheck ? "Acceso Denegado" : "Acceso Permitido";

/*
* f-1  f-2  f-3
* */

const Badge = (props) => {
  const {slug, color, headline, float, format} = props;
  return <BadgeStx className={`comp_global_badge`}
                   href={slug || `#`}
                   float={float}
                   format={format}
                   color={color}>
    {headline || `Tecnología`}
  </BadgeStx>
};

export default Badge;