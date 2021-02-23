import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 3.5rem 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid #d7dbda;

    font-weight: ${theme.font.bold};

    span:first-child {
      font-size: ${theme.font.sizes.large};
    }

    span:last-child {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`