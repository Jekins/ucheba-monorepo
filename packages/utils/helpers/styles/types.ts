import { StyledFunction } from 'styled-components'
import { TRecordOptional } from '../common/types'
import {
  EBreakpoint,
  EColor,
  EContainer,
  EDuration,
  EFontFamily,
  EFontSize,
  EFontWeight,
  ELineHeight,
  ERadius,
  EShadow,
  ESpacing,
} from './variables'

export type TColor = keyof typeof EColor
export type TColors = TRecordOptional<TColor, string>

export type TSpacing = keyof typeof ESpacing
export type TSpacings = TRecordOptional<TSpacing, string>

export type TSize = keyof typeof ESpacing
export type TSizes = TRecordOptional<TSize, string>

export type TFontSize = keyof typeof EFontSize
export type TFontSizes = TRecordOptional<TFontSize, string>

export type TLineHeight = keyof typeof ELineHeight
export type TLineHeights = TRecordOptional<TLineHeight, string>

export type TFontWeight = keyof typeof EFontWeight
export type TFontWeights = TRecordOptional<TFontWeight, string>

export type TFontFamily = keyof typeof EFontFamily
export type TFontFamilies = TRecordOptional<TFontFamily, string>

export type TRadius = keyof typeof ERadius
export type TRadiuses = TRecordOptional<TRadius, string>

export type TShadow = keyof typeof EShadow
export type TShadows = TRecordOptional<TShadow, string>

export type TBreakpoint = keyof typeof EBreakpoint
export type TBreakpoints = TRecordOptional<TBreakpoint, string>

export type TContainer = keyof typeof EContainer
export type TContainers = TRecordOptional<TContainer, string>

export type TDuration = keyof typeof EDuration
export type TDurations = TRecordOptional<TDuration, string>

export interface IThemeVariables {
  color?: TColors
  spacing?: TSpacings
  fontSize?: TFontSizes
  lineHeight?: TLineHeights
  fontWeight?: TFontWeights
  fontFamily?: TFontFamilies
  radius?: TRadiuses
  shadow?: TShadows
  breakpoint?: TBreakpoints
  duration?: TDurations
  container?: TContainers
}

export interface ICreateModifiers {
  (modifiers: object): StyledFunction<any>[]
}
