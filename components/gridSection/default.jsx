import React from 'react';
import styled from "styled-components";
import Card from "../global/card/default";
import Badge from "../global/badge/default";

const ContainerGrid = styled.div`
    margin-top: 10px;
    .wrapperGrid {
        .grid_content {
            margin-top: 20px;
            .comp_global_badge {
                font-size: 12px;
            }
            
            h3 {
                color: #444444;
                font-family: 'lemon_milkbold';
                font-size: 18px;
                text-transform: uppercase;
            }
        }        
    }
    @media (min-width: 768px) {
        display: flex;
        
        .wrapperGrid {
            margin-right: 20px;
        }
    }
`;

const GridSection = (props) => {
    let data = {
        'color' : '#33fe88',
        'title' : 'WhatsApp: 5 trucos imperdibles para sacarle provecho este 2020 a este aplicativo',
        'headline' : 'tecnología',
        'url': '/tecnologia',
        'url_note': '/tecnologia/interna-tecnologia',
        'slug_img': './images/section/list-section.png'
    };
    return <ContainerGrid className={'comp_grid-section'}>
        <div className="wrapperGrid">
            <Card data={data} float={false}/>
            <div className={'grid_content'}>
                <Badge float={false}
                       color={data.color}
                       slug={'/tecnologia'}/>
                <h3>{data.title}</h3>
            </div>
        </div>

        <div className="wrapperGrid">
            <Card data={data} float={false}/>
            <div className={'grid_content'}>
                <Badge float={false}
                       color={data.color}
                       slug={'/tecnologia'}/>
                <h3>{data.title}</h3>
            </div>
        </div>

        <div className="wrapperGrid">
            <Card data={data} float={false}/>
            <div className={'grid_content'}>
                <Badge float={false}
                       color={data.color}
                       slug={'/tecnologia'}/>
                <h3>{data.title}</h3>
            </div>
        </div>
    </ContainerGrid>
}

export default GridSection;