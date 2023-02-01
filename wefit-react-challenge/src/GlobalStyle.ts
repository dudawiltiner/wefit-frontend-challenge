import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #2F2E41;
  }

  body, input, button {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
  }
`
