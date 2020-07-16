import React, { FC } from 'react'
import styled from 'styled-components'
import { TPropsText } from './types'

const Block = styled.div``

/** Блок текста */
const Text: FC<TPropsText> = ({ children, ...props }) => {
  return <Block {...props}>{children}</Block>
}

Text.defaultProps = {}

export default Text
