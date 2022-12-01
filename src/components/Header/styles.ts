import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  padding: 16px 0;
  color: #ffffff;
  background-color: #0000004f;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
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
    font-weight: bold;
    margin: 0;
    padding: 0;
  }
  li {
    cursor: pointer;
  }
`;
