import theme from 'styled-theming'
import {IThemeVariables, IWithModifiers} from '../types/styles'

export default class Theme {
  private defaultVariables: Required<IThemeVariables> = {
    colors: {
      base: '#333',
      primary: 'blue',
      accent: 'green',
    },
    sizes: {
      medium: '16px',
      xsmall: '8px',
      small: '12px',
      large: '18px',
      xlarge: '20px',
    },
  }

  constructor(newVariables?: IThemeVariables) {
    this.replaceColors(newVariables)
  }

  get variables(): Required<IThemeVariables> {
    return this.defaultVariables
  }

  private replaceColors(colors: IThemeVariables = {}): void {
    Object.keys(colors).forEach(part => {
      this.defaultVariables[part] = {...this.defaultVariables[part], ...colors[part]}
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

  get styledVariables(): IThemeVariables {
    return Object.keys(this.variables).reduce((accVars, kind) => {
      return {
        ...accVars,
        [kind]: this.getVariablesByKind(kind, this.variables[kind]),
      }
    }, {})
  }
}

export const sv = new Theme().styledVariables

export const withModifiers: IWithModifiers = (Component, modifiers) => {
  Object.keys(modifiers).forEach(modifier => {
    let kindModifier = modifiers[modifier]

    if (Array.isArray(kindModifier)) {
      kindModifier = {
        true: kindModifier,
      }
    }

    const valueModifier = Object.keys(kindModifier).reduce((accKinds, kind) => {
      return {
        ...accKinds,
        [kind]: {
          default: kindModifier[kind],
        },
      }
    }, {})

    Component.componentStyle.rules.push(theme.variants('mode', modifier, valueModifier))
  })
}
