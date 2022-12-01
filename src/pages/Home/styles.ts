import styled from 'styled-components';
import capa from '../../images/capa.png';

export const Container = styled.section`
  height: 60vh;
  background-color: darksalmon;
  background-image: url(${capa}),
    linear-gradient(45deg, #ee82ee 40%, #7f00ff 115%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
