import styled from 'styled-components';

export const Container = styled.div`
  .carousel-indicators {
    display: none;
  }
  .carousel-inner {
    width: 60vw;
    max-width: 700px;
  }
  .teste {
    background-color: '#00000000';
    width: 500px;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 500px;
    @media (max-width: 1150px) {
      font-size: 16px;
    }
  }
`;

export const TitleCarousel = styled.h3`
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: bold;
  @media (max-width: 1150px) {
    font-size: 24px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 16px;
  /* @media (max-width: 1150px) {
    button {
      font-size: 20px;
    }
  } */
  #btn-colorful {
    border: 1px solid #00000000;
    background-color: #7006d1;
    box-shadow: 0 0 4px black;
  }
  #btn-colorless {
    border: 1px solid #ffffff;
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
`;

export const Card = styled.div`
  background-color: '#00000000';
  width: '500px';
  height: '15em';
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
  max-width: '500px';
  @media (max-width: 1500px) {
    height: 1000px;
  }
`;
