import React from 'react';
import styled from "styled-components";
import Card from "../global/card/default";
import Badge from "../global/badge/default";

const ContainerNew = styled.div`
    margin-top: 5px;
    margin-bottom: 10px;
    
    .comp_global_card {        
        margin-right: 20px;
    }
    
    .wrapperNew {
        h3 {
            color: #444444;
            font-family: 'lemon_milkbold';
            font-size: 24px;
            text-transform: uppercase;
        }
        
        p {
            color: #444444;
            font-family: 'Roboto', sans-serif;            
        }
    }
    
    @media (min-width: 768px) {
        display: flex;
    }
`;

const OutstandingNews = (props) => {
    let data = {
        'color' : '#3d81e4',
        'title' : 'tiroteo en méxico: gobernador culpa a videojuego ‘natural selection’ de  inspirar matanza en colegio',
        'headline' : 'videojuegos',
        'url': '/videojuegos',
        'url_note': '/tecnologia/interna-tecnologia',
        'body': 'El gobernador del estado de Coahuilla, región donde se produjo el tiroteo, indicó que se iniciará una investigación para determinar si el menor estuvo influenciado por el videojuego.',
        'slug_img': './images/home/img_featured.jpg',
    };

    return <ContainerNew className={'comp_outstandingNew'}>
        <Card data={data} float={false}/>
        <div className="wrapperNew">
            <Badge float={false}
                   color={data.color}
                   slug={'/tecnologia'}/>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
        </div>
    </ContainerNew>
}

export default OutstandingNews;