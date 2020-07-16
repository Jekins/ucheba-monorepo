import React, { FC } from 'react'
import styled from 'styled-components'
import { TPropsHeading } from './types'

const Block = styled.div``

/** Заголовок с подзаголовками */
const Heading: FC<TPropsHeading> = ({ children, ...props }) => {
  return <Block {...props}>{children}</Block>
}

Heading.defaultProps = {}

export default Heading
