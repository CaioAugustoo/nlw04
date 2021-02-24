import styled, { css} from 'styled-components'

export const Wrapper = styled.button`
  ${({theme}) => css`
    width: 100%;
    height: 5rem;

    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: ${theme.border.radius03};
    outline: none;
    
    background: ${theme.colors.blue};
    color: ${theme.colors.white};

    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};

    transition: background-color 0.2s;
    cursor: pointer;

    &:not([disabled]):hover {
      background: ${theme.colors.blueDark};

      &.active {
        background-color: ${theme.colors.red};
      color: ${theme.colors.white};
      }
    }

    &.active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.title};
    }

    &:disabled {
      background-color: ${theme.colors.white};
      color: ${theme.colors.text};
      cursor: not-allowed;
    }
  `}
`