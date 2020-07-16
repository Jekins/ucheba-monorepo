import React, { FC } from 'react'
import styled from 'styled-components'
import { TPropsInput } from './types'

const Block = styled.div``

/** Текстовое поле */
const Input: FC<TPropsInput> = ({ children, ...props }) => {
  return <Block {...props}>{children}</Block>
}

Input.defaultProps = {}

export default Input
