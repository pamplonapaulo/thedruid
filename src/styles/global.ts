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
    overflow: hidden

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    &::-webkit-scrollbar {
      width: 0 !important;
    }
  }

  body {
    font-family: 'PT Serif', serif;
  }
`

export default GlobalStyles
