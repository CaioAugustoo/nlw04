import styled, { css } from 'styled-components'

export const Overlay = styled.div`
  background-color: rgba(242, 243, 245, 0.8);

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  ${({theme}) => css`
    background-color: ${theme.colors.white};
    width: 100%;
    max-width: 400px;
    padding: 2rem 3rem;
    border-radius: ${theme.border.radius03};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    text-align: center;
    position: relative;

    > button {
      position: absolute;
      right: 0.5rem;
      top: 0;
      background: none;
      border: 0;
      width: 50px;
      height: 0;

      &:hover {
        background: none !important;
      }
    }
  `}
`

export const Header = styled.header`
  ${({theme}) => css`
    font-size: 8.75rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.blue};
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  `}
`

export const Title = styled.strong`
  ${({theme }) => css`
    font-size: 2.25rem;
    color: ${theme.colors.title};
  `}
`

export const Description = styled.p`
  ${({theme}) => css`
    font-size: 1.25rem;
    color: ${theme.colors.text};
    margin-top: 0.25rem;
  `}
`

