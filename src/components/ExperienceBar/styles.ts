import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({theme}) => css`
    display: flex;
    align-items: center;

    > div {
      flex: 1;
      height: 4px;
      border-radius: ${theme.border.radius01};
      background: ${theme.colors.gray};
      margin: 0 1.5rem;
      position: relative;
    }
  `}
`

export const Experience = styled.span`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.normal};
  `}
`

export const CurrentExperienceWrapper = styled.div`
  ${({theme}) => css`
    > div {
      height: 4px;
      border-radius: ${theme.border.radius01};
      background: ${theme.colors.green};
    }
  `}
`

export const CurrentExperience = styled.span`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
`