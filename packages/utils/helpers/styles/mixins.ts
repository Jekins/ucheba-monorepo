import { css, FlattenSimpleInterpolation } from 'styled-components'
import { sv } from './variables'
import { TFontSize, TFontWeight } from './types'

/** Миксины для стилей */
const getBaseFontStyles = (
  font: TFontSize,
  weight: TFontWeight
): FlattenSimpleInterpolation => {
  return css`
    font-size: ${sv.fontSize[font]};
    font-weight: ${sv.fontWeight[weight]};
    line-height: ${sv.lineHeight[font]};
  `
}

export const font = {
  h1: getBaseFontStyles('h1', 'extrabold'),

  h2: getBaseFontStyles('h2', 'extrabold'),

  h3: getBaseFontStyles('h3', 'bold'),

  h4: getBaseFontStyles('h4', 'bold'),

  h5: getBaseFontStyles('h5', 'bold'),

  h6: getBaseFontStyles('h6', 'bold'),

  xsmall1: getBaseFontStyles('xsmall1', 'regular'),

  xsmall2: getBaseFontStyles('xsmall2', 'regular'),

  small1: getBaseFontStyles('small1', 'regular'),

  small2: getBaseFontStyles('small2', 'regular'),

  medium: getBaseFontStyles('medium', 'regular'),

  large: getBaseFontStyles('large', 'regular'),

  uppercase: css`
    text-transform: uppercase;
    letter-spacing: 1px;
  `,
}

export const sm = {
  font,
}
