import styled from 'styled-components';
import backgroundImage from '../../images/capa.png';

// roxo 1 = #8a2be2

export const Container = styled.div`
  height: 60vh;
  background-color: darksalmon;
  background-image: url(${backgroundImage}),
    linear-gradient(45deg, #ee82ee 40%, #7f00ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;


