import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { sv, createModifiers } from '@ucheba/utils/helpers/styles'
import { TButtonProps } from './_types'
import { getRightProps } from './_bll'

export const Inner = styled.span`
  color: red;
  font-weight: bold;
`

export const Icon = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${sv.colors.base};
`

const blockModifiers = createModifiers({
  color: {
    base: css`
      background-color: ${sv.colors.base};
      border: 2px solid red;

      ${Inner} {
        color: #fff;
      }
    `,
    primary: css`
      background-color: ${sv.colors.primary};

      ${Inner} {
        color: #fff;
      }
    `,
  },

  size: {
    medium: css`
      font-size: ${sv.sizes.medium};
      padding: 12px;
    `,
    large: css`
      font-size: ${sv.sizes.large};
      padding: 20px;
    `,
  },

  icon: css`
    ${Inner} {
      margin-right: 15px;
    }
  `,
})

export const Block = styled.div`
  cursor: pointer;
  border-radius: 8px;
  text-decoration: none;

  ${blockModifiers}
`

export const defaultProps = {
  color: 'base',
  size: 'medium',
} as Partial<TButtonProps>

const DefaultButton = ({ children, icon, ...props }, ref): JSX.Element => {
  return (
    <Block {...getRightProps(props, ref, { icon })}>
      <Inner>{children}</Inner>
      {icon && <Icon>{icon}</Icon>}
    </Block>
  )
}

export default forwardRef<HTMLElement, TButtonProps>(DefaultButton)
