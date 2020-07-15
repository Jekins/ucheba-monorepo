import { StyledFunction } from 'styled-components'
import { TRecordOptional } from './common'

export type TSize = 'medium' | 'xsmall' | 'small' | 'large' | 'xlarge'
export type TSizes = TRecordOptional<TSize, string>

/** Colors */
export type TColor = 'base' | 'primary' | 'accent'
export type TColors = TRecordOptional<TColor, string>

export interface IThemeVariables {
  colors?: TColors
  sizes?: TSizes
}

export interface ICreateModifiers {
  (modifiers: object): StyledFunction<any>[]
}
