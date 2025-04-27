import React from 'react';
import styled from 'styled-components';

const DestaquesContainer = styled.section`
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

const DestaquesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 25px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Dia = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const DiaHeader = styled.h3`
  background-color: #ffd3d8;
  color: #333;
  padding: 12px 15px;
  font-size: 1.1rem;
`;

const DiaImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const DiaVideo = styled.video`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const DiaContent = styled.div`
  padding: 15px;
`;

const DiaText = styled.p`
  margin-bottom: 15px;
  font-size: 0.95rem;
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

const destaquesDaSemana = [
  {
    id: 1,
    dia: 'Segunda-feira: Inspiração',
    imagem: 'images/destaques/segunda_inspiracao.png',
    alt: 'Decoração Completa',
    texto: 'Cada detalhe conta uma história 💖. Qual o tema da sua próxima festa?',
    ctaText: 'Agende seu orçamento!',
    ctaLink: 'https://wa.me/5592816784422'
  },
  {
    id: 2,
    dia: 'Terça-feira: Dica Técnica',
    imagem: 'images/destaques/terca_dica.png',
    alt: '5 dicas para escolher o tema da festa',
    texto: '5 dicas para escolher o tema perfeito para a festa do seu pequeno!',
    ctaText: 'Veja mais!',
    ctaLink: 'https://eventos-virtuais-e-decor-nwkk7nl.gamma.site/blog'
  },
  {
    id: 3,
    dia: 'Quarta-feira: Depoimento',
    imagem: 'images/destaques/quarta_depoimento.png',
    alt: 'Foi uma alegria decorar o 1º aninho da Ana Clara!',
    texto: '"Foi uma alegria decorar o 1º aninho da Ana Clara! Cada detalhe ficou perfeito!" - Mamãe Juliana',
    ctaText: 'Ver galeria',
    ctaLink: 'https://eventos-virtuais-e-decor-nwkk7nl.gamma.site/galeria'
  },
  {
    id: 4,
    dia: 'Quinta-feira: Reels Criativo',
    tipo: 'video',
    video: 'images/destaques/Untitled_mimos da ayla.mp4',
    poster: 'images/destaques/quinta_reels.png',
    texto: 'Transformação mágica: antes e depois das nossas decorações!',
    ctaText: 'Ver vídeo',
    ctaLink: 'https://www.instagram.com/mimosdaayla._/reels'
  },
  {
    id: 5,
    dia: 'Sexta-feira: Promoção Flash',
    imagem: 'images/destaques/sexta_promocao.png',
    alt: 'Sexta Mágica',
    texto: '✨ Sexta Mágica: Quem fechar decoração hoje ganha kit de lembrancinhas personalizadas!',
    ctaText: 'Garanta sua oferta!',
    ctaLink: 'https://wa.me/5592816784422?text=Quero%20aproveitar%20a%20promo%C3%A7%C3%A3o%20da%20Sexta%20M%C3%A1gica!'
  }
];

const DestaquesSemana = () => {
  return (
    <DestaquesContainer>
      <Title>Destaques da Semana</Title>
      <DestaquesGrid>
        {destaquesDaSemana.map((destaque) => (
          <Dia key={destaque.id} role="article">
            <DiaHeader>{destaque.dia}</DiaHeader>
            {destaque.tipo === 'video' ? (
              <DiaVideo controls poster={destaque.poster}>
                <source src={destaque.video} type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </DiaVideo>
            ) : (
              <DiaImage src={destaque.imagem} alt={destaque.alt} />
            )}
            <DiaContent>
              <DiaText>{destaque.texto}</DiaText>
              <CtaButton href={destaque.ctaLink}>{destaque.ctaText}</CtaButton>
            </DiaContent>
          </Dia>
        ))}
      </DestaquesGrid>
    </DestaquesContainer>
  );
};

export default DestaquesSemana;