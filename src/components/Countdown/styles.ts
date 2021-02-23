import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.title};

    > div {
      flex: 1;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      background: ${theme.colors.white};
      box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
      border-radius: ${theme.border.radius03};
      font-size: ${theme.font.sizes.xxlarge};
      text-align: center;
    }

    > div span {
      flex: 1;
    }

    > div span:first-child {
      border-right: 1px solid #f8f1f3;
    }

    > div span:last-child {
      border-left: 1px solid #f8f1f3;
    }

    > span {
      font-size: ${theme.font.sizes.xxxlarge};
      margin: 0 0.5rem;
    }
  `}
`