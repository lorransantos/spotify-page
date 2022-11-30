import React from 'react';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import CenterLorem from '../CenterLorem';
import LeftLorem from '../LeftLorem';
import RightImages from '../RightImages';
import WhatHaveSpotify from '../WhatHaveSpotify';
import * as S from './styles';

const Details = () => {
  const [content, setContent] = React.useState<number | null>(null);

  const handleContent = (value: number) => {
    setContent(value);
  };

  const contentRender = () => {
    switch (content) {
      case null:
        return <WhatHaveSpotify />;

      case 1:
        return <LeftLorem animation={false} />;

      case 2:
        return <CenterLorem />;

      case 3:
        return <LeftLorem animation={true} />;

      case 4:
        return <RightImages />;

      default:
        break;
    }
  };

  return (
    <>
      <S.Container>
        <S.ImageContainer>
          <S.Button onClick={() => handleContent(1)}>
            <img src={img1} />
          </S.Button>
          <S.Button onClick={() => handleContent(2)}>
            <img src={img2} />
          </S.Button>
          <S.Button onClick={() => handleContent(3)}>
            <img src={img3} />
          </S.Button>
          <S.Button onClick={() => handleContent(4)}>
            <img src={img4} />
          </S.Button>
        </S.ImageContainer>

        <S.ContainerContents>{contentRender()}</S.ContainerContents>

        {/* <S.DetailsContainer>
          <h2>O que o Spotify tem?</h2>
          <h3>Músicas</h3>
          <p>
            O spotify tem milhões de músicas. Escute seus sons favoritos,
            descubra novas músicas e reúna seus favoritos em um só lugar.
          </p>
          <h3>Playlists</h3>
          <p>
            No Spotify você encontra uma playlist para cada momento. Todas
            feitas por fanáticos e especialistas da música
          </p>
          <h3>Novos lançamentos</h3>
          <p>
            Escute os novos lançamentos de singles e álbuns da semana e veja o
            que está bombando no top 50
          </p>
        </S.DetailsContainer> */}
      </S.Container>
    </>
  );
};

export default Details;
