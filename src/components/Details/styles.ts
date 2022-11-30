import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 10vh 0;
  min-width: 70vw;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 40vw;
  max-width: 418px;
  gap: 16px;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  img {
    width: 28vw;
    max-width: 200px;
  }
`;

export const ContainerContents = styled.section`
  width: 40vw;
  max-width: 418px;
`;
