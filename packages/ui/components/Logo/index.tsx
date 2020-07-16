import React, { FC } from 'react'
import styled from 'styled-components'
import { TPropsLogo } from './types'

const Block = styled.div``

/** Логотип Учаба.ру */
const Logo: FC<TPropsLogo> = ({ children, ...props }) => {
  return <Block {...props}>{children}</Block>
}

Logo.defaultProps = {}

export default Logo
