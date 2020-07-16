import React, { FC } from 'react'
import styled from 'styled-components'
import { TPropsFooter } from './types'

const Block = styled.div``

/** Футер сайта */
const Footer: FC<TPropsFooter> = ({ children, ...props }) => {
  return <Block {...props}>{children}</Block>
}

Footer.defaultProps = {}

export default Footer
