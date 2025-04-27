import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';

describe('Header Component', () => {
  test('renderiza o título corretamente', () => {
    render(<Header />);
    const titleElement = screen.getByText('Mimos da Ayla');
    expect(titleElement).toBeInTheDocument();
  });

  test('renderiza a data atual no formato correto', () => {
    render(<Header />);
    
    // Obter o mês e ano atual para comparação
    const months = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    const currentDate = new Date();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const expectedDate = `Newsletter - ${month} ${year}`;
    
    const dateElement = screen.getByText(expectedDate);
    expect(dateElement).toBeInTheDocument();
  });
});