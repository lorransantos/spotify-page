import styled from 'styled-components';

export const DetailsContainer = styled.section`
  max-width: 40vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h2,
  h3 {
    color: #7f00ff;
  }
  @media (max-width: 1000px) {
    max-width: 100%;
    padding-top: 40px;
    h2 {
      margin-bottom: 16px;
    }
  }
`;
