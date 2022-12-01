import React from 'react';
import * as S from './styles';
import iphone1 from '../../images/iphone1.png';
import iphone2 from '../../images/iphone2.png';

const FuncionalitiesPlace = () => {
  return (
    <S.Container>
      <S.ContentContainer>
        <S.TextContainer>
          <h2 className='textColor'>Fácil</h2>
          <h3 className='subtitleColor'>Buscar</h3>
          <p className='textColor'>Já sabe o que quer escutar?</p>
          <p className='textColor'>É só procurar e apertar o play</p>
          <h3 className='subtitleColor'>Navegar</h3>
          <p className='textColor'>
            Veja os novos lançamentos, o que está nombando nas paradas e as
            melhores playlists para o seu momento.
          </p>
          <h3 className='subtitleColor'>Descobrir</h3>
          <p className='textColor'>
            Curta músicas novas toda segunda-feira com uma playlist
            personalizada para você. Ou relaxe e curta uma das rádios.
          </p>
        </S.TextContainer>
        <S.ImagesContainer>
          <img
            src={iphone1}
            alt='Iphone com o player da spotify'
            id='imageUp'
          />
          <img
            src={iphone2}
            alt='Iphone com uma playlist da spotify'
            id='imageBottom'
          />
        </S.ImagesContainer>
      </S.ContentContainer>
    </S.Container>
  );
};

export default FuncionalitiesPlace;
