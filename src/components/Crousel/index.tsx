import Carousel from 'react-bootstrap/Carousel';
import * as S from './styles';

const CarouselComponent = () => {
  return (
    <S.Container>
      <Carousel>
        <Carousel.Item>
          <section className='cardSlide'>
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
          <section className='cardSlide'>
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
