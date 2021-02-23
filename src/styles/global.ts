import styled, { css, createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    body {
      background: ${theme.colors.background};
      color: ${theme.colors.text};
    }
    html {
      @media (max-width: ${theme.media.big}) {
        font-size: 93.75%;
      }

      @media (max-width: ${theme.media.medium}) {
        font-size: 87.5%;
      }
    }
    body,
    input,
    textarea,
    button {
      font: ${theme.font.normal} ${theme.font.sizes.normal} ${theme.font.family};
    }
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
`;
export default GlobalStyles;

export const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  section {
    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }
`;
