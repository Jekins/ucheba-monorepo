import React, { FC } from 'react'
import styled from 'styled-components'
import { sv } from '@ucheba/utils/helpers/styles/variables'
import { TPropsLayout } from './types'

const Header = styled.div``

const Body = styled.div`
  margin: ${sv.spacing.medium} auto;
  max-width: ${sv.container.lg};
`

const Block = styled.div``

/** Лейаут страницы */
const Layout: FC<TPropsLayout> = ({ header, body, ...props }) => {
  return (
    <Block {...props}>
      <Header>{header}</Header>
      <Body>{body}</Body>
    </Block>
  )
}

Layout.defaultProps = {}

export default Layout
