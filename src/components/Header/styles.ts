import styled from 'styled-components';
import { OpenSidebar } from './';

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* padding: 16px 0; */
  color: #ffffff;
  background-color: #0000004f;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 8vh;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: #ffffff;
  background-color: #00000000;
  border: none;
  min-width: 120px;
  width: 10%;
  max-width: 180px;
  padding: 4px;
`;

export const NavList = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    height: 100%;
    gap: 16px;
    font-weight: 900;
    margin: 0;
    padding: 0;
  }
  li {
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    span {
      display: none;
    }
    /* === null */
    display: ${(props: OpenSidebar) => (props.sidebar ? 'flex' : 'none')};
    padding: 5% 15% 5% 12px;
    position: absolute;
    top: 8vh;
    flex-direction: column;
    right: ${(props: OpenSidebar) => (props.sidebar ? '0px' : '-100%')};
    animation: ${(props: OpenSidebar) =>
      props.sidebar ? '1s open' : '1s close'};
    backdrop-filter: blur(4px);
    border-radius: 4px;

    ul {
      flex-direction: column;
      align-items: flex-start;
    }

    @keyframes open {
      from {
        right: -100%;
      }
      to {
        right: 0px;
      }
    }
    @keyframes close {
      from {
        right: 0px;
      }
      to {
        right: -100%;
      }
    }
  }
`;

export const Sidebar = styled.div`
  button {
    background-color: #00000000;
    border: none;
  }
  @media (min-width: 1000px) {
    display: none;
  }
`;
