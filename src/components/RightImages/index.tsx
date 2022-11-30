import React from 'react';
import * as S from './styles';
import img1 from '../../images/1.jpeg';
import img2 from '../../images/2.jpeg';
import img3 from '../../images/3.jpeg';
import img4 from '../../images/4.jpeg';

const RightImages = () => {
  return (
    <S.Container>
      <img src={img1} />
      <img src={img2} />
      <img src={img3} />
      <img src={img4} />
    </S.Container>
  );
};

export default RightImages;
