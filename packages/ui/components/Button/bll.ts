import { changePropsValueToBoolean } from '@ucheba/utils/helpers/core'
import { IGetTagName, IGetProps } from './types'

export const getTagName: IGetTagName = ({ href }) => {
  return (href && 'a') || 'button'
}

export const getProps: IGetProps = (props, otherProps = {}) => {
  const newProps = { ...props, ...changePropsValueToBoolean(otherProps) }

  if (newProps.href) {
    delete newProps.type
  } else if (!newProps.type) {
    newProps.type = 'button'
  }

  newProps.as = getTagName(newProps)

  return newProps
}
