import React from 'react';
import styled from "styled-components";

const ContainerInternal = styled.div`
    p {
        color: #7f7f7f;
        font-family: sans-serif;
        font-size: 12px;
    }
    
    .container_interna {
        font-family: sans-serif;
        p {
            color: #000000;
            font-size: 16px;
        }
        
        a {
            color: #ff8a00;            
            font-weight: bold;
        }
        
        img {
            border-bottom: 12px solid #33fe88;
            display: block;
            margin: 0 auto;            
        }
        
        span {
            color: #7f7f7f;
            display: block;
            font-family: sans-serif;
            font-size: 12px;
            margin-top: 10px;
            text-align: center;
        }
    }
`;

const ContentInternal = (props) => {
  return <ContainerInternal className={'comp_containerInternal'}>
    <img src="/images/internal/img_interna.jpg" alt=""/>
    <p>Aweita / películas y series / ¿luke skywalker en The Witcher temporada 2?</p>
    <div className={'container_interna'}>
      <p><strong>Netflix</strong> estrenó por fin la esperada serie de <strong>The Witcher</strong>, inspirada en la obra del polaco <strong>Andrezj Spapkowski</strong> y medianamente en la trilogía de juegos homónima. Los fanáticos de las series y de las aventuras del brujo recibieron muy bien esta producción y preflotaron un comentario que el actor <a
        href="#">Mark Hamill</a> publicó en Twitter el año pasado, donde indicaba que estaría dispuesto a interpretar a Vesemir, el maestro y padre adoptivo de Geralt de Rivia.</p>

      <p>Uno de los showrunners de la serie de <strong>Netflix</strong> en cuestión, <strong>Lauren Hissrich</strong>, publicó las características de este personaje, el cual describió como paternal, sabio, vivaz y antiguo. El tuit llegó a la cuenta oficial del actor el cual respondió “No tengo idea de qué es esto o de qué trata, pero estoy de acuerdo con que debería ser interpretado por mí.”</p>

      <p>Considerando que la serie tuvo el presupuesto para contratar a un actor de Hollywood como <strong>Henry Cavill</strong>, contratar al protagonista de la trilogía original de <strong>Star Wars</strong> parece posible.</p>

      <p>La temporada 2 de <strong>The Witcher</strong> ya ha sido confirmada por <strong>Netflix</strong> y todo indica que la acción se trasladará a Kaer Morhen, la fortaleza ancestral de los brujos, en donde definitivamente podremos ver al más viejo de brujos en acción.</p>

      <p>Por otro lado, recientemente se ha podido apreciar a <a href="#">Mark Hamill maquillado para la serie Knightfall</a>, en donde se le ve como un personaje similar. Los fanáticos no podrían estar más contentos con este actor como el entrañable y anciano brujo.</p>

      <img src="/images/internal/img_description_internal.jpg" alt=""/>
      <span>Lauren Hissrich recibe un comentario directamente de Hamil | Fuente: Twitter</span>

      <p>Recordemos que la inclusión de <p>Henry Cavill</p> nació con una declaración en internet del actor sobre lo mucho que le gustaban tanto los libros de la Saga de Geralt de Rivia y sus videojuegos, la serie The Witcher, creada por <strong>CD Projekt Red.</strong></p>

      <p><strong>Para más noticias del mundo de los e-sports como Dota 2, CS:GO, LoL, y otros videojugos , síguenos por nuestras redes sociales de Líbero E-Sports en Facebook e Instagram.</strong></p>

      <p><strong>Si deseas mirar nuestras transmisiones y las coberturas de los torneos más importantes, hazlo por nuestras pantallas en YouTube, Twitch y Facebook.</strong></p>

    </div>
  </ContainerInternal>
};

export default ContentInternal;