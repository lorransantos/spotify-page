import styled from 'styled-components';

export const Container = styled.section`
  width: 40vw;
  max-width: 512px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 25px;
  img {
    width: 100%;
    max-width: 230px;
  }
  @media (max-width: 1000px) {
    max-width: 100%;
    width: 100%;
    justify-content: center;
    padding-top: 25px;
    img {
      width: 35%;
    }
  }
`;
