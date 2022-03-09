import { lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    scroll-behavior: smooth;
    
    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.primary};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => lighten(0.4, theme.primary)};
    }
  }

  body {
    background: ${props => props.theme.background};
    font: 400 1rem 'Montserrat', sans-serif;
  }

  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    max-width: 85rem;
    padding: 0 1rem;
    @media(max-width:1280px) {
      max-width: 70rem;
    }
    @media(max-width:1024px) {
      max-width: 50rem;
    }
    @media(max-width:640px) {
      padding: 0 2rem;
    }
  }

  //Class do componente  react-toast-notificatinos
  div.css-18gu508-Content {
      font-weight: 500;
  }

`;