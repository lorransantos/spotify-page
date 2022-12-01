import styled from 'styled-components';
import capa from '../../images/capa.png';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 60px;
  width: 100%;
  min-height: 40vh;
  padding: 24px 0px;
  margin-bottom: -20px;
  background-image: url(${capa}),
    linear-gradient(to right, #ee82ee 40%, #7f00ff 115%);
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: -0px;
    height: 32px;
    width: 100%;
    background-image: linear-gradient(to right, #ee82ee 40%, #7f00ff 115%);
  }
`;

export const ContentContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 18%;
  width: 70%;
  max-width: 1280px;
  margin: 0 auto;
  @media (max-width: 1440px) {
    gap: 15%;
  }
`;

export const TextContainer = styled.div`
  max-width: 300px;
  margin-bottom: 30px;
  margin-left: 5%;
  @media (min-width: 1500px) {
    margin-left: 8%;
  }
  h2 {
    margin-top: 40px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 40px;
  }
  h3 {
    margin: 8px 0px;
  }
  .textColor {
    color: #ffffff;
  }
  .subtitleColor {
    color: #33ffba;
  }
  @media (max-width: 1150px) {
    text-align: center;
  }
`;

export const ImagesContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  transform: rotate(10deg);
  min-width: 350px;
  width: 40vw;
  max-width: 512px;
  margin-top: -60px;
  height: 100%;
  gap: 24px;
  #imageUp {
    padding-bottom: 50px;
    width: 50%;
  }
  #imageBottom {
    padding-top: 50px;
    width: 50%;
  }
  @media (max-width: 1440px) {
    margin-top: -1%;
  }
  @media (max-width: 1250px) {
    margin-top: 5%;
  }
  @media (max-width: 1150px) {
    display: none;
  }
`;
