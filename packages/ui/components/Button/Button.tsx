import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { sv, createModifiers } from '@ucheba/utils/helpers/styles'
import { TPropsButton } from './types'
import { getProps } from './bll'

const Inner = styled.span`
  color: red;
  font-weight: bold;
`

const Icon = styled.span`
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
    accent: css`
      background-color: ${sv.colors.accent};

      ${Inner} {
        color: #fff;
      }
    `,
  },

  size: {
    medium: css`
      font-size: ${sv.sizes.medium};
      padding: 20px;
    `,
    xsmall: css`
      font-size: ${sv.sizes.xsmall};
      padding: 16px;
    `,
    small: css`
      font-size: ${sv.sizes.small};
      padding: 18px;
    `,
    large: css`
      font-size: ${sv.sizes.large};
      padding: 20px;
    `,
    xlarge: css`
      font-size: ${sv.sizes.xlarge};
      padding: 22px;
    `,
  },

  icon: css`
    ${Inner} {
      margin-right: 15px;
    }
  `,
})

const Block = styled.div`
  cursor: pointer;
  border-radius: 8px;
  text-decoration: none;
  display: inline-flex;

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
  color: 'base',
  size: 'medium',
}

export default Button
