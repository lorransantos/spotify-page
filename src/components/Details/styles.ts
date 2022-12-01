import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 10vh 0;
  margin: 0 auto;
  width: 70%;
  max-width: 1280px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 40vw;
  max-width: 512px;
  gap: 25px;
  @media (max-width: 1000px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  width: 45%;
  img {
    width: 100%;
  }
  @media (max-width: 1000px) {
    width: 35%;
    display: flex;
  }
`;

export const ContainerContents = styled.section`
  width: 40vw;
  max-width: 418px;
  @media (max-width: 1000px) {
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: left;
  }
`;
