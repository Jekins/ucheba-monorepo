import React, { FC } from 'react'
import styled from 'styled-components'
import { sv } from '@ucheba/utils/helpers/styles/variables'
import { sm } from '@ucheba/utils/helpers/styles/mixins'
import { TPropsHeader } from './types'

const Inner = styled.div`
  margin: 0 auto;
  max-width: ${sv.container.lg};

  ${sm.font.h3}
`

const Block = styled.header`
  background-color: ${sv.color.black};
  color: ${sv.color.white};
  margin-bottom: ${sv.spacing.medium};
  padding: ${sv.spacing.small};
`

/** Шапка сайта */
const Header: FC<TPropsHeader> = ({ children, ...props }) => {
  return (
    <Block {...props}>
      <Inner>{children}</Inner>
    </Block>
  )
}

export default Header
