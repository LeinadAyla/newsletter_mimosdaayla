import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebook, FaWhatsapp, FaPinterest } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 30px 20px;
  text-align: center;
`;

const Title = styled.h3`
  margin-bottom: 15px;
`;

const TitleLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

const Subtitle = styled.p`
  margin-bottom: 20px;
`;

const SocialIcons = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  margin: 0 10px;
  color: #333;
  text-decoration: none;
  font-size: 1.2rem;
  transition: transform 0.3s, background-color 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    background-color: #ff6b81;
    color: white;
  }
  
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    margin: 0 5px;
  }
`;

const ContatoContainer = styled.div`
  margin-top: 20px;
`;

const ContatoItem = styled.p`
  margin-bottom: 10px;
`;

const Signature = styled.p`
  margin-top: 30px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Title>
        <TitleLink href="https://eventos-virtuais-e-decor-nwkk7nl.gamma.site/">
          Mimos da Ayla
        </TitleLink>
      </Title>
      <Subtitle>Transformando momentos em memórias inesquecíveis</Subtitle>
      
      <SocialIcons>
        <SocialLink href="https://www.instagram.com/mimosdaayla._/" aria-label="Instagram">
          <FaInstagram />
        </SocialLink>
        <SocialLink href="https://www.facebook.com/arlaneaguiardasilva.silva" aria-label="Facebook">
          <FaFacebook />
        </SocialLink>
        <SocialLink href="https://wa.me/5592816784422" aria-label="WhatsApp">
          <FaWhatsapp />
        </SocialLink>
        <SocialLink href="https://br.pinterest.com/" aria-label="Pinterest">
          <FaPinterest />
        </SocialLink>
      </SocialIcons>
      
      <ContatoContainer>
        <ContatoItem>📱 +55 92 8167-8442</ContatoItem>
        <ContatoItem>✉️ contato@mimosdaayla.com.br</ContatoItem>
        <ContatoItem>📍 Manaus - Amazonas</ContatoItem>
      </ContatoContainer>
      
      <Signature>Com carinho, Equipe Mimos da Ayla ❤️</Signature>
    </FooterContainer>
  );
};

export default Footer;