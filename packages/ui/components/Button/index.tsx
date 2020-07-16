import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { createModifiers } from '@ucheba/utils/helpers/styles'
import { sv } from '@ucheba/utils/helpers/styles/variables'
import { TPropsButton } from './types'
import { getProps } from './bll'

const Inner = styled.span`
  color: ${sv.color.red};
  font-weight: ${sv.fontWeight.bold};
`

const Icon = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: ${sv.color.white};
  font-weight: ${sv.fontWeight.bold};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${sv.color.acid};
`

const blockModifiers = createModifiers({
  color: {
    blue: css`
      background-color: ${sv.color.blue};

      ${Inner} {
        color: ${sv.color.white};
      }
    `,

    emerald: css`
      background-color: ${sv.color.emerald};

      ${Inner} {
        color: ${sv.color.white};
      }
    `,

    gold: css`
      background-color: ${sv.color.gold};

      ${Inner} {
        color: ${sv.color.black};
      }
    `,
  },

  size: ((): object => {
    const sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge']

    return sizes.reduce((acc, item) => {
      acc[item] = css`
        font-size: ${sv.fontSize[item]};
        padding: ${sv.spacing[item]};
      `

      return acc
    }, {})
  })(),

  icon: css`
    ${Inner} {
      margin-right: ${sv.spacing.small};
    }
  `,
})

const Block = styled.div`
  cursor: pointer;
  border-radius: 8px;
  text-decoration: none;
  display: inline-flex;
  transition: 0.3s;
  border: none;

  &:hover {
    box-shadow: ${sv.shadow.large};
  }

  ${blockModifiers}
`

/** Кнопка или ссылка в виде кнопки */
const Button: FC<TPropsButton> = ({ children, icon, ...props }) => {
  return (
    <Block {...getProps(props, { icon })}>
      <Inner>{children}</Inner>
      {icon && <Icon>{icon}</Icon>}
    </Block>
  )
}

Button.defaultProps = {
  color: 'blue',
  size: 'medium',
}

export default Button
