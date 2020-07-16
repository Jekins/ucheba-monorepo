import React, { FC } from 'react'
import styled from 'styled-components'
import { TPropsCheckbox } from './types'

const Block = styled.div``

/** Чекбокс */
const Checkbox: FC<TPropsCheckbox> = ({ children, ...props }) => {
  return <Block {...props}>{children}</Block>
}

Checkbox.defaultProps = {}

export default Checkbox
