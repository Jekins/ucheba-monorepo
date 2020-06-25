import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { createModifiers, sv } from '@ucheba/utils/helpers/styles'
import { THeaderProps } from './_types'

const Inner = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`

const blockModifiers = createModifiers({
  fixed: css`
    position: fixed;
    left: 0;
    right: 0;
    top: 10px;
  `,
})

const Block = styled.header`
  background-color: ${sv.colors.primary};
  color: #fff;

  ${blockModifiers}
`

const DefaultHeader: FC<THeaderProps> = props => {
  return (
    <Block {...props}>
      <Inner>Header</Inner>
    </Block>
  )
}

export default DefaultHeader
