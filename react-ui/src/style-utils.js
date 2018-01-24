import { css } from 'styled-components'

export const media = {
  mobile: (...args) => css`
    @media (max-width: 599px) {
      ${ css(...args) }
    }
  `,
  tablet: (...args) => css`
    @media (min-width: 600px) {
      ${ css(...args) }
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 1200px)  {
      ${ css(...args) }
    }
  `,
  jumboDesktop: (...args) => css`
    @media (min-width: 1800px) {
      ${ css(...args) }
    }
  `
}

export function truncate(width) {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
}
