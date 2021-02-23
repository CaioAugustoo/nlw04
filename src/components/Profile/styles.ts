import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({theme}) => css`
    display: flex;
    align-items: center;

    > img {
      width: 5.5rem;
      height: 5.5rem;
      border-radius: ${theme.border.radius02};
    }

    div {
      margin-left: 1.5rem;
    }

    div strong {
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.title};
    }

    div p img {
      margin-right: 0.5rem;
    }
  `}
`