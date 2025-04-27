import React from 'react';
import styled from 'styled-components';

const PortfolioContainer = styled.section`
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

const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`;

const PortfolioItem = styled.div`
  height: 150px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  
  @media (max-width: 480px) {
    height: 180px;
  }
`;

const PortfolioImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.1);
  }
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
  
  &:hover {
    background-color: #ff5266;
  }
`;

const CtaContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const portfolioItems = [
  { id: 1, imagem: 'images/portfolio/circo1.png', alt: 'Decoração tema Circo' },
  { id: 2, imagem: 'images/portfolio/princesa.png', alt: 'Decoração tema Princesa' },
  { id: 3, imagem: 'images/portfolio/safari.png', alt: 'Decoração tema Safari' },
  { id: 4, imagem: 'images/portfolio/marinheiro.png', alt: 'Decoração tema Marinheiro' },
  { id: 5, imagem: 'images/portfolio/unicornio.png', alt: 'Decoração tema Unicórnio' },
  { id: 6, imagem: 'images/portfolio/super-herois.png', alt: 'Decoração tema Super-heróis' },
  { id: 7, imagem: 'images/portfolio/futebol.png', alt: 'Decoração tema Futebol' },
  { id: 8, imagem: 'images/portfolio/jardim-encantado.png', alt: 'Decoração tema Jardim Encantado' }
];

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <Title>Nosso Portfólio</Title>
      <Subtitle>Confira alguns dos nossos trabalhos mais recentes:</Subtitle>
      
      <PortfolioGrid>
        {portfolioItems.map((item) => (
          <PortfolioItem key={item.id} role="img" aria-label={item.alt}>
            <PortfolioImage src={item.imagem} alt={item.alt} />
          </PortfolioItem>
        ))}
      </PortfolioGrid>
      
      <CtaContainer>
        <CtaButton href="https://eventos-virtuais-e-decor-nwkk7nl.gamma.site/galeria">Ver galeria completa</CtaButton>
      </CtaContainer>
    </PortfolioContainer>
  );
};

export default Portfolio;