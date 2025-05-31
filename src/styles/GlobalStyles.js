import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Fontes */
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Dancing+Script:wght@700&display=swap');
  
  /* Reset e estilos gerais */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Montserrat', Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
  }
  
  .container {
    max-width: 800px;
    margin: 20px auto;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  /* Responsividade */
  /* Desktops grandes */
  @media (min-width: 1200px) {
    .container {
      max-width: 900px;
      margin: 30px auto;
    }
    
    body {
      font-size: 16px;
    }
  }
  
  /* Tablets em modo paisagem */
  @media (max-width: 1024px) {
    .container {
      max-width: 90%;
      margin: 20px auto;
    }
    
    body {
      font-size: 15px;
    }
  }
  
  /* Tablets e smartphones grandes */
  @media (max-width: 768px) {
    .container {
      max-width: 95%;
      margin: 15px auto;
    }
    
    body {
      font-size: 14px;
    }
  }
  
  /* Smartphones médios */
  @media (max-width: 576px) {
    .container {
      margin: 12px auto;
      border-radius: 12px;
    }
  }
  
  /* Smartphones pequenos */
  @media (max-width: 480px) {
    .container {
      margin: 10px auto;
      border-radius: 10px;
    }
    
    body {
      font-size: 13px;
    }
  }
  
  /* Smartphones muito pequenos */
  @media (max-width: 360px) {
    .container {
      margin: 8px auto;
      border-radius: 8px;
    }
    
    body {
      font-size: 12px;
    }
  }
`;

export default GlobalStyles;