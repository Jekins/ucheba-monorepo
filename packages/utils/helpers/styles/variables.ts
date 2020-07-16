import { IThemeVariables } from './types'

/**
 *  Переменные стилей по умолчанию.
 *  Каждую из них можно переопределить в настройках темы сервиса.
 */
export enum EColor {
  coffee = 'rgba(43, 8, 0, 1)',
  orange = 'rgba(255, 106, 0, 1)',
  tangerine = 'rgba(255, 206, 8, 1)',
  gold = 'rgba(255, 229, 84, 1)',
  yellow = 'rgba(255, 247, 159, 1)',
  maroon = 'rgba(52, 0, 20, 1)',
  red = 'rgba(255, 8, 41, 1)',
  pink = 'rgba(254, 47, 128, 1)',
  flamingo = 'rgba(255, 201, 241, 1)',
  rose = 'rgba(254, 214, 244, 1)',
  pine = 'rgba(56, 66, 2, 1)',
  emerald = 'rgba(21, 88, 1, 1)',
  green = 'rgba(28, 117, 3, 1)',
  acid = 'rgba(210, 247, 17, 1)',
  lime = 'rgba(227, 255, 79, 1)',
  navy = 'rgba(0, 5, 55, 1)',
  cobalt = 'rgba(0, 100, 206, 1)',
  blue = 'rgba(29, 138, 254, 1)',
  silver = 'rgba(247, 249, 252, 1)',
  white = 'rgba(255, 255, 255, 1)',
  black = 'rgba(3, 15, 35, 1)',
  gray5 = 'rgba(3, 15, 35, .5)',
  gray9 = 'rgba(3, 15, 35, .9)',
  gray15 = 'rgba(3, 15, 35, .15)',
  gray50 = 'rgba(3, 15, 35, .5)',
  gray60 = 'rgba(3, 15, 35, .6)',
}

export enum ESpacing {
  uxsmall = '2px',
  usmall = '4px',
  xxsmall = '8px',
  xsmall = '12px',
  small = '16px',
  medium = '20px',
  large = '24px',
  xlarge = '32px',
  xxlarge = '40px',
  ularge = '56px',
  uxlarge = '64px',
  uxxlarge = '80px',
}

export enum EFontSize {
  h1 = '40px',
  h2 = '32px',
  h3 = '24px',
  h4 = '18px',
  h5 = '16px',
  h6 = '14px',
  large = '18px',
  medium = '16px',
  small1 = '14px',
  small2 = '14px',
  xsmall1 = '12px',
  xsmall2 = '12px',
}

export enum ELineHeight {
  h1 = '48px',
  h2 = '40px',
  h3 = '32px',
  h4 = '24px',
  h5 = '24px',
  h6 = '22px',
  large = '24px',
  medium = '24px',
  small1 = '22px',
  small2 = '18px',
  xsmall1 = '18px',
  xsmall2 = '12px',
}

export enum EFontWeight {
  regular = '400',
  medium = '500',
  semibold = '600',
  bold = '700',
  extrabold = '800',
}

export enum EFontFamily {
  proximaNova = 'ProximaNova, Arial, Helvetica, sans-serif',
}

export enum ERadius {
  medium = '4px',
  large = '8px',
}

export enum EShadow {
  large = `0 25px 30px 0 rgba(3, 15, 35, 0.1), 0 0 20px 0 rgba(3, 15, 35, .5)`,
}

export enum EBreakpoint {
  xs = '480px',
  sm = '720px',
  md = '1024px',
  lg = '1200px',
}

export enum EContainer {
  xs = '100%',
  sm = '688px',
  md = '992px',
  lg = '1168px',
}

export enum EDuration {
  slow = '0.5s',
  medium = '0.3s',
  fast = '0.2s',
}

export default class Theme {
  private defaultVariables: Required<IThemeVariables> = {
    color: EColor,
    spacing: ESpacing,
    fontSize: EFontSize,
    lineHeight: ELineHeight,
    fontWeight: EFontWeight,
    fontFamily: EFontFamily,
    radius: ERadius,
    shadow: EShadow,
    breakpoint: EBreakpoint,
    duration: EDuration,
    container: EContainer,
  }

  constructor(newVariables?: IThemeVariables) {
    this.replaceColors(newVariables)
  }

  private replaceColors(colors: IThemeVariables = {}): void {
    Object.keys(colors).forEach(part => {
      this.defaultVariables[part] = { ...this.defaultVariables[part], ...colors[part] }
    })
  }

  // eslint-disable-next-line class-methods-use-this
  private getValueByTheme(kind: string, variable: string): Function {
    return (props): string => props.theme[kind][variable]
  }

  private getVariablesByKind(kind: string, enumKind): object {
    return Object.keys(enumKind).reduce((accKind, variable) => {
      return {
        ...accKind,
        [variable]: this.getValueByTheme(kind, variable),
      }
    }, {})
  }

  get variables(): Required<IThemeVariables> {
    return this.defaultVariables
  }

  get styledVariables(): Required<IThemeVariables> {
    return Object.keys(this.variables).reduce((accVars, kind) => {
      return {
        ...accVars,
        [kind]: this.getVariablesByKind(kind, this.variables[kind]),
      }
    }, <Required<IThemeVariables>>{})
  }
}

export const sv = new Theme().styledVariables
