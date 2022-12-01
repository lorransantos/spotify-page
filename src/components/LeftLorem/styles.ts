import styled from 'styled-components';
import { Props } from './';

export const Container = styled.section`
  max-width: 40vw;
  text-align: left;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  h2,
  h3 {
    color: #7f00ff;
  }
  p {
    margin-bottom: 0;
  }
  #titleId {
    top: 0px;
  }
  #secondAnimation {
    margin-bottom: ${(props: Props) => props.isAnimation && '32px'};
  }
  .ani {
    position: ${(props: Props) => props.isAnimation && 'absolute'};
    animation: ${(props: Props) => props.isAnimation && 'text 3s alternate'};
    @keyframes text {
      from {
        left: 90px;
      }
      to {
        left: 0px;
      }
    }
  }
  .paddingTop {
    padding-top: ${(props: Props) => props.isAnimation && '40px'};
  }
  @media (max-width: 1000px) {
    max-width: 100%;
    margin-top: 16px;
    #secondAnimation {
      margin-bottom: ${(props: Props) => props.isAnimation && '100px'};
    }
  }
`;
