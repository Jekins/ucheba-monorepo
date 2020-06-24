import React, {forwardRef} from 'react'
import styled, {css} from 'styled-components'
import {sv, addModifiers} from '@ucheba/utils/helpers/styles'
import {IBlockProps} from '../_types'
import {getRightProps} from '../_bll'

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
`

export const Block = styled.div`
  cursor: pointer;
  border-radius: 8px;
  text-decoration: none;

  ${addModifiers({
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
  })}
`

export const defaultProps = {
  color: 'base',
  size: 'medium',
} as Partial<IBlockProps>

Block.defaultProps = defaultProps

export default forwardRef<HTMLElement, IBlockProps>(function Button(
  {children, icon, ...props},
  ref
) {
  return (
    <Block {...getRightProps(props, ref, {icon})}>
      <Inner>{children}</Inner>
      {icon && <Icon>{icon}</Icon>}
    </Block>
  )
})
