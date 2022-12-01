import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 40vw;
  height: 100%;
  h2,
  h3 {
    color: #7f00ff;
  }
  @media (max-width: 1000px) {
    width: 100%;
    max-width: 100%;
    padding-top: 40px;
  }
`;
