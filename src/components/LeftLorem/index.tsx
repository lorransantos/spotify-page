import React from 'react';
import * as S from './styles';

const LeftLorem = ({ animation }: Animation) => {
  return (
    <S.Container isAnimation={animation}>
      <h2
        className='ani'
        id='titleId'
      >
        O que é Lorem Ipsum?
      </h2>
      <h3 className='paddingTop'>Porque é que usamos?</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        recusandae sequi corrupti saepe.
      </p>
      <h3
        className='ani'
        id='secondAnimation'
      >
        De onde é que ele vem?
      </h3>
      <p className='paddingTop'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat id
        quae laudantium possimus!
      </p>
      <h3>Onde posso arranjar algum?</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum amet
        eveniet eaque inventore.
      </p>
    </S.Container>
  );
};

export default LeftLorem;

type Animation = {
  animation: boolean;
};

export interface Props {
  isAnimation: boolean;
}
