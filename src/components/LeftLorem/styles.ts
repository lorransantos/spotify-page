import styled, { keyframes } from 'styled-components';
import { Props } from './';

export const Container = styled.section`
  max-width: 40vw;
  text-align: left;
  position: relative;
  h2,
  h3 {
    color: #7f00ff;
  }
  p {
    margin-bottom: 0;
  }
  .ani {
    position: ${(props: Props) => (props.isAnimation ? 'absolute' : null)};
    animation: ${(props: Props) =>
      props.isAnimation ? 'text 3s infinite' : null};
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
    padding-top: ${(props: Props) => (props.isAnimation ? '40px' : null)};
  }
`;
