import React from 'react';
import styled from "styled-components";

const BadgeStx = styled.a`
  display: block;
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
`;

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