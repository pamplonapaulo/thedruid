import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &&::-webkit-scrollbar {
      display: none;
    }
  }

  body {
    font-family: 'PT Serif', serif;
  }
`

export default GlobalStyles
