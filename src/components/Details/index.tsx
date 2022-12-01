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
      </S.Container>
    </>
  );
};

export default Details;

type TextAlign = {
  alignCenter: boolean;
};
