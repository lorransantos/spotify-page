import React from 'react';
import * as S from './styles';

const WhatHaveSpotify = () => {
  return (
    <S.DetailsContainer>
      <h2>O que o Spotify tem?</h2>
      <h3>Músicas</h3>
      <p>
        O spotify tem milhões de músicas. Escute seus sons favoritos, descubra
        novas músicas e reúna seus favoritos em um só lugar.
      </p>
      <h3>Playlists</h3>
      <p>
        No Spotify você encontra uma playlist para cada momento. Todas feitas
        por fanáticos e especialistas da música
      </p>
      <h3>Novos lançamentos</h3>
      <p>
        Escute os novos lançamentos de singles e álbuns da semana e veja o que
        está bombando no top 50
      </p>
    </S.DetailsContainer>
  );
};

export default WhatHaveSpotify;
