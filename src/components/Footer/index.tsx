import React from 'react';
import logo from '../../images/spotify.svg';
import * as S from './styles';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import twitter from '../../images/twitter.png';

const Footer = () => {
  return (
    <S.Footer>
      <S.SectionContainer>
        <S.Logo>
          <img
            src={logo}
            alt='Logo da Spotify'
          />
        </S.Logo>
        <article>
          <h2>Company</h2>
          <ul>
            <li>Sobre</li>
            <li>Empregos</li>
            <li>Imprensa</li>
            <li>Novidades</li>
          </ul>
        </article>
        <article>
          <h2>Comunidades</h2>
          <ul>
            <li>Artistas</li>
            <li>Desenvolvedores</li>
            <li>Marcas</li>
          </ul>
        </article>
        <article>
          <h2>Links úteis</h2>
          <ul>
            <li>Ajuda</li>
            <li>Presentes</li>
            <li>Player na web</li>
          </ul>
        </article>
        <article>
          <S.ImagesList>
            <li>
              <img
                src={facebook}
                alt='Logo do Facebook'
              />
            </li>
            <li>
              <img
                src={instagram}
                alt='Logo do Instagram'
              />
            </li>
            <li>
              <img
                src={twitter}
                alt='Logo do Twitter'
              />
            </li>
          </S.ImagesList>
        </article>
      </S.SectionContainer>
    </S.Footer>
  );
};

export default Footer;
