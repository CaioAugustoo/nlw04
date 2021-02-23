import { css, createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
${({theme}) => css`
  body {
    font-size: ${theme.font.sizes.normal};
    background: ${theme.colors.background};
    color: ${theme.colors.text};
  };
  html {
    font-size: 62.5%;

    @media(max-width: ${theme.media.big}) {
      font-size: 93.75%;
    }

    @media(max-width: ${theme.media.medium}) {
      font-size: 87.5%;
    }
  };
  body,
  input,
  textarea,
  button {
    font: ${theme.font.normal} ${theme.font.sizes.normal} ${theme.font.family};
  };
`}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
export default GlobalStyles;
