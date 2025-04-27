import React from 'react';
import styled from 'styled-components';

const SaudacaoContainer = styled.div`
  text-align: center;
  padding: 15px;
  font-size: 1.2rem;
  background-color: #fff5f6;
  border-bottom: 1px solid #f0f0f0;
`;

const Destaque = styled.span`
  font-weight: 500;
  color: #ff6b81;
`;

const Saudacao = ({ nome = '[Nome]' }) => {
  return (
    <SaudacaoContainer>
      Olá, <Destaque>{nome}</Destaque>! Confira as novidades que preparamos para você este mês.
    </SaudacaoContainer>
  );
};

export default Saudacao;