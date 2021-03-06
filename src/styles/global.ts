import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`

  html, body {
    height: auto;
    font-size: 1rem;
    color: black;
    margin: 0;
    color: white;
    background-color: ${theme.colors.primary};
  }
  
  pre {
    font-size: 1.75rem;
    font-family: sans-serif;
    font-weight: 100;
    letter-spacing: .04rem;
  }

  strong {
    font-weight: 600;
  }
  h1, h2, h3, h4 {
    font-weight: 500;
    color: ${theme.colors.primary};
    position: relative;
    &:before {
      content:"";
      width: 5rem;
      border-bottom: 3px solid ${theme.colors.secondary};
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }

  h1 {
    font-size: 2rem;
    @media (min-width: 768px){
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    @media (min-width: 768px){
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.375rem;
    @media (min-width: 768px){
      font-size: 1.5
    }
  }

  p, span {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.75;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;

  }

  a{
    color: ${theme.colors.primary} !important;
    text-decoration: none;
    &:hover{
      color: ${theme.colors.thirdary} !important;
    }
  }
  a > * {
    color: ${theme.colors.primary} !important;
  }
  

  ::selection {
    color: rgb(255, 255, 255);
    background: ${theme.colors.secondary};
  }

`
