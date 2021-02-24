import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({theme}) => css`
    height: 100%;
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius03};
    box-shadow: rgba(0,0,0,0.05);
    padding: 1.5rem 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  `}
`

export const ChallengeActive = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  
`

export const GetXP = styled.header`
  ${({theme}) => css`
    color: ${theme.colors.blue};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};
    padding: 0 2rem  1.5rem;
    border-bottom: 1px solid ${theme.colors.gray};
  `}
`

export const ChallengeAbout = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    line-height: 1.5;
  }
`

export const ChallengeTitle = styled.strong`
  ${({theme}) => css`
    font-size: 2rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.title};
    margin: 1.5rem 0 1rem;
  `}
`


export const ChallengeNotActive = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.normal};
      line-height: 1.4;
    }

    p {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1.4;
      max-width: 70%;
      margin-top: 3rem;

      img {
        margin-bottom: 2rem;
      }
    }
  `}
`

export const Actions = styled.footer`
  ${({theme}) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    button {
      height: 3rem;

      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.normal};
      font-weight: ${theme.font.normal};

      transition: filter .2s;

      &:first-child {
        background-color: ${theme.colors.red};

        &:hover {
          background-color: ${theme.colors.red};
          filter: brightness(0.9);
        }
      }
      
      &:last-child {
        background-color: ${theme.colors.green};

        &:hover {
          background-color: ${theme.colors.green};
          filter: brightness(0.9);
        }
      }
    }
  `} 
`