import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Saudacao from './components/Saudacao';
import DestaquesSemana from './components/DestaquesSemana';
import Metricas from './components/Metricas';
import Campanhas from './components/Campanhas';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

function App() {
  const [nome, setNome] = useState('[Nome]');

  useEffect(() => {
    // Função para personalizar a newsletter com o nome do destinatário
    const personalizarNewsletter = () => {
      // Obter parâmetros da URL
      const urlParams = new URLSearchParams(window.location.search);
      const nomeParam = urlParams.get('nome');
      
      // Atualizar o nome do cliente se estiver disponível
      if (nomeParam) {
        setNome(nomeParam);
      }
    };

    personalizarNewsletter();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Saudacao nome={nome} />
        <DestaquesSemana />
        <Metricas />
        <Campanhas />
        <Portfolio />
        <Footer />
      </Container>
    </>
  )
}

export default App
