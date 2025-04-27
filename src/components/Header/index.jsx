import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
  padding: 25px 15px;
  text-align: center;
  color: #fff;

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 15px 10px;
    
    h1 {
      font-size: 1.8rem;
    }
  }
`;

const Title = styled.h1`
  font-family: 'Dancing Script', cursive;
  font-size: 2.5rem;
  margin-bottom: 10px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
`;

const Subtitle = styled.p`
  font-size: 1rem;
  opacity: 0.9;
`;

const Header = () => {
  const getCurrentDate = () => {
    const months = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    
    const currentDate = new Date();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    
    return `${month} ${year}`;
  };

  return (
    <HeaderContainer>
      <Title>Mimos da Ayla</Title>
      <Subtitle>Newsletter - {getCurrentDate()}</Subtitle>
    </HeaderContainer>
  );
};

export default Header;