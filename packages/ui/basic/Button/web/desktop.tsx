import React from 'react'
import styled, {css} from 'styled-components'
import {sv, withModifiers} from '@ucheba/utils/helpers/styles'
import DefaultComponent, {defaultProps, Icon, Inner} from './_default'
import {IBlockProps} from '../_types'

const Button = styled(DefaultComponent)`
  && {
    ${Icon} {
      border: 3px solid white;
    }
  }
` as React.FC<IBlockProps>

withModifiers(Button, {
  color: {
    primary: css`
      background-color: ${sv.colors.accent};

      ${Inner} {
        color: #fff;
      }
    `,
  },
})

Button.defaultProps = defaultProps

export default Button
