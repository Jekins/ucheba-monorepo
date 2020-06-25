import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { createModifiers, sv } from '@ucheba/utils/helpers/styles'
import DefaultComponent, { defaultProps, Icon, Inner } from './_default'
import { IBlockProps } from './_types'

const buttonModifiers = createModifiers({
  color: {
    primary: css`
      background-color: ${sv.colors.accent};

      ${Inner} {
        color: #fff;
      }
    `,
  },
})

const Button = styled(DefaultComponent)`
  && {
    ${Icon} {
      border: 3px solid white;
    }

    ${buttonModifiers}
  }
` as FC<IBlockProps>

Button.defaultProps = defaultProps

export default Button
