import { changePropsValueToBoolean } from '@ucheba/utils/helpers/core'
import { IGetTagName, IGetRightProps } from './_types'

export const getTagName: IGetTagName = ({ href }) => {
  return (href && 'a') || 'button'
}

export const getRightProps: IGetRightProps = (props, ref, otherProps = {}) => {
  const newProps = { ...props, ref, ...changePropsValueToBoolean(otherProps) }

  if (newProps.href) {
    delete newProps.type
  } else if (!newProps.type) {
    newProps.type = 'button'
  }

  newProps.as = getTagName(newProps)

  return newProps
}
