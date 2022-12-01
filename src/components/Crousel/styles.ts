import styled from 'styled-components';

export const Container = styled.div`
  .carousel-indicators {
    display: none;
  }
  .carousel-inner {
    width: 90vw;
    max-width: 700px;
  }
  .cardSlide {
    background-color: #00000000;
    width: 500px;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 500px;
  }
`;

export const TitleCarousel = styled.h3`
  font-size: 2.5rem;
  text-transform: uppercase;
  @media (max-width: 1150px) {
    font-size: 24px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 16px;
  #btn-colorful {
    border: 1px solid #00000000;
    background-color: #7006d1;
    box-shadow: 0 0 4px black;
  }
  #btn-colorless {
    border: 1px solid #ffffff;
  }
  @media (max-width: 1000px) {
    gap: 4px;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 100px;
  background-color: #00000000;
  padding: 4px 12px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  @media (max-width: 1150px) {
    font-size: 12px;
    padding: 4px 4px;
  }
  @media (max-width: 1000px) {
    font-size: 1em;
    padding: 0px 4px;
  }
  @media (max-width: 720px) {
    font-size: 0.6em;
  }
`;
