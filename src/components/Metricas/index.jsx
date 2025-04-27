import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';

const MetricasContainer = styled.section`
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

const MetricasGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const Metrica = styled.div`
  text-align: center;
  width: 150px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    width: 120px;
  }
`;

const MetricaNumero = styled(motion.div)`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ff6b81;
  margin-bottom: 5px;
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const MetricaTexto = styled.div`
  font-size: 0.9rem;
  color: #777;
`;

const metricas = [
  { id: 1, numero: 150, texto: 'Festas decoradas' },
  { id: 2, numero: 120, texto: 'Clientes felizes' },
  { id: 3, numero: 15, texto: 'Cidades atendidas' },
  { id: 4, numero: 25, texto: 'Temas diferentes' }
];

const Metricas = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  return (
    <MetricasContainer ref={ref}>
      <Title>Nossos Números</Title>
      <Subtitle>Crescemos junto com a felicidade dos nossos clientes:</Subtitle>
      
      <MetricasGrid>
        {metricas.map((metrica) => (
          <Metrica key={metrica.id} role="presentation">
            <MetricaNumero
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: metrica.id * 0.1 }}
            >
              {isInView ? metrica.numero : 0}
            </MetricaNumero>
            <MetricaTexto>{metrica.texto}</MetricaTexto>
          </Metrica>
        ))}
      </MetricasGrid>
    </MetricasContainer>
  );
};

export default Metricas;