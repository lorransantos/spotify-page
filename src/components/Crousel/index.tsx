import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import testeDeImagem from '../../images/1.jpeg';
import testeDeImagem2 from '../../images/2.jpeg';
import * as S from './styles';

const CarouselComponent = () => {
  return (
    <S.Container>
      <Carousel>
        <Carousel.Item>
          <section
            style={{
              backgroundColor: '#00000000',
              width: '60vw',
              height: '10em',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '500px',
              padding: '0px',
            }}
          >
            <Carousel.Caption>
              <S.TitleCarousel>Música para todos</S.TitleCarousel>
              <S.ButtonContainer>
                <S.Button id='btn-colorful'>Aproveite o spotify free</S.Button>
                <S.Button id='btn-colorless'>Obter o spotify premium</S.Button>
              </S.ButtonContainer>
            </Carousel.Caption>
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <section className='teste'
            // style={{
            //   backgroundColor: '#00000000',
            //   width: '500px',
            //   height: '10em',
            //   display: 'flex',
            //   justifyContent: 'center',
            //   alignItems: 'center',
            //   maxWidth: '500px',
            //   padding: '0px',
            // }}
          >
            <Carousel.Caption>
              <S.TitleCarousel>As melhores radios</S.TitleCarousel>
              <S.ButtonContainer>
                <S.Button id='btn-colorless'>♫ Ouça agora</S.Button>
              </S.ButtonContainer>
            </Carousel.Caption>
          </section>
        </Carousel.Item>
      </Carousel>
    </S.Container>
  );
};

export default CarouselComponent;
