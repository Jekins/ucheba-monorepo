import theme from 'styled-theming'
import { ICreateModifiers } from './types'

export const createModifiers: ICreateModifiers = (modifiers = {}) => {
  const newModifiers = []

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

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    newModifiers.push(theme.variants('mode', modifier, valueModifier))
  })

  return newModifiers
}
