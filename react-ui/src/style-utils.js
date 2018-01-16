import { css } from 'styled-components'

export const media = {
  mobile: (...args) => css`
    @media (max-width: 599px) {
      ${ css(...args) }
    }
  `,
  tablet: (...args) => css`
    @media (min-width:600px) and (max-width: 1199px)  {
      ${ css(...args) }
    }
  `,
  desktop: (...args) => css`
    @media (min-width:1200px) and (max-width: 1799px)  {
      ${ css(...args) }
    }
  `,
  jumboDesktop: (...args) => css`
    @media (min-width: 1800px) {
      ${ css(...args) }
    }
  `
}


