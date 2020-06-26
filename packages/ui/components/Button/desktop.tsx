import { FC } from 'react'
import styled, { css } from 'styled-components'
import { createModifiers, sv } from '@ucheba/utils/helpers/styles'
import DefaultButton, { defaultProps, Icon, Inner } from './_default'
import { TButtonProps } from './_types'

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

const Button = styled(DefaultButton)`
  && {
    ${Icon} {
      border: 3px solid white;
    }

    ${buttonModifiers}
  }
` as FC<TButtonProps>

Button.defaultProps = defaultProps

export default Button
