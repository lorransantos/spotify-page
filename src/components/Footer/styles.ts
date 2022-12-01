import styled from 'styled-components';

export const Footer = styled.footer`
  /* display: flex; */
  background-color: #1f1f1f;
  width: 100%;
  color: #ffffff;
  z-index: 1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10vh 0px;
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    cursor: pointer;
  }
`;

export const SectionContainer = styled.section`
  width: 60vw;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (min-width: 1500px) {
    margin-left: 4%;
  }
  article {
    h2 {
      font-weight: bold;
      text-transform: uppercase;
    }
    h2,
    p {
      font-size: 16px;
    }
  }
`;

export const Logo = styled.article`
  width: 10vw;
  max-width: 200px;
  min-width: 200px;
  @media (max-width: 1000px) {
    padding-bottom: 16px;
  }
`;

export const ImagesList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  gap: 16px;
  li {
    cursor: pointer;
  }
`;
