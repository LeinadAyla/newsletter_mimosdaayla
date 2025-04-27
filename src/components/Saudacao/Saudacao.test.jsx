import React from 'react';
import { render, screen } from '@testing-library/react';
import Saudacao from './index';

describe('Saudacao Component', () => {
  test('renderiza a saudação com nome padrão quando nenhum nome é fornecido', () => {
    render(<Saudacao />);
    const saudacaoText = screen.getByText(/Olá, \[Nome\]!/i);
    expect(saudacaoText).toBeInTheDocument();
  });

  test('renderiza a saudação com o nome fornecido', () => {
    const nomeTeste = 'Maria';
    render(<Saudacao nome={nomeTeste} />);
    const saudacaoText = screen.getByText(new RegExp(`Olá, ${nomeTeste}!`, 'i'));
    expect(saudacaoText).toBeInTheDocument();
  });

  test('contém o texto de novidades', () => {
    render(<Saudacao />);
    const novidades = screen.getByText(/Confira as novidades que preparamos para você este mês./i);
    expect(novidades).toBeInTheDocument();
  });
});