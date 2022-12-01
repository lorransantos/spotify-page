import React from 'react';
import * as S from './styles';
import logo from '../../images/spotify.svg';
import { TfiMenu } from 'react-icons/tfi';

const Header = () => {
  const [sidebar, setSidebar] = React.useState<boolean | null>(null);

  return (
    <S.Container>
      <S.Button>
        <img
          src={logo}
          alt={'Logo da Spotify'}
        />
      </S.Button>

      <S.Sidebar>
        <button onClick={() => setSidebar(!sidebar)}>
          <TfiMenu
            size='32px'
            color='#ffffff'
          />
        </button>
      </S.Sidebar>

      <S.NavList sidebar={sidebar}>
        <ul>
          <li>Premium</li>
          <li>Ajuda</li>
          <li>Baixar</li>
          <span>|</span>
          <li>Entrar</li>
        </ul>
      </S.NavList>
    </S.Container>
  );
};

export default Header;

export interface OpenSidebar {
  sidebar: boolean | null;
}
