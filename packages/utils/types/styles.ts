import {TRecordOptional} from './common'

export type TSize = 'medium' | 'xsmall' | 'small' | 'large' | 'xlarge'
export type TSizes = TRecordOptional<TSize, string>

export enum EColor {
  base = 'base',
  primary = 'primary',
  accent = 'accent',
}
export type TColor = 'base' | 'primary' | 'accent'
export type TColors = TRecordOptional<TColor, string>

export interface IThemeVariables {
  colors?: TColors
  sizes?: TSizes
}

export interface IWithModifiers {
  (Component: any, modifiers: object): void
}
