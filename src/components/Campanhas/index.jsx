import React from 'react';
import styled from 'styled-components';

const CampanhasContainer = styled.section`
  padding: 25px;
  border-bottom: 1px solid #f0f0f0;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #ff6b81;
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  
  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: #ff6b81;
  }
`;

const CampanhasBanner = styled.div`
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('images/campanhas/natal.png') center/cover;
  padding: 40px 20px;
  text-align: center;
  border-radius: 10px;
  color: white;
  margin: 20px 0;
  
  @media (max-width: 480px) {
    padding: 25px 15px;
    
    h3 {
      font-size: 1.5rem;
    }
  }
`;

const BannerTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

const BannerText = styled.p`
  margin-bottom: 15px;
`;

const CtaButton = styled.a`
  display: inline-block;
  background-color: #ff6b81;
  color: white;
  padding: 10px 20px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: background-color 0.3s;
  margin-top: 15px;
  
  &:hover {
    background-color: #ff5266;
  }
`;

const Nota = styled.p`
  text-align: center;
  margin-top: 20px;
`;

const Campanhas = () => {
  return (
    <CampanhasContainer>
      <Title>Campanhas Especiais</Title>
      
      <CampanhasBanner>
        <BannerTitle>Promoção Especial</BannerTitle>
        <BannerText>Decore sua próxima festa com a Mimos da Ayla e ganhe 15% de desconto!</BannerText>
        <CtaButton href="https://wa.me/5592816784422?text=Quero%20saber%20mais%20sobre%20a%20promo%C3%A7%C3%A3o%20especial!">Saiba mais</CtaButton>
      </CampanhasBanner>
      
      <Nota>Fique atento às nossas redes sociais para mais promoções exclusivas!</Nota>
    </CampanhasContainer>
  );
};

export default Campanhas;