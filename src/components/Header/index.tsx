import React from 'react';
import logo from '../../images/favicon.png';
import * as S from './styles';
import teste from '../../images/spotify.svg';

const Header = () => {
  return (
    <S.Container>
      <S.Button>
        <img
          src={teste}
          alt={'Logo da Spotify'}
        />
        {/* <h1>Spotify</h1>&#174; */}
      </S.Button>

      <S.NavList>
        <ul>
          <li>Premium</li>
          <li>Ajuda</li>
          <li>Baixar</li>|<li>Entrar</li>
        </ul>
      </S.NavList>
    </S.Container>
  );
};

export default Header;
