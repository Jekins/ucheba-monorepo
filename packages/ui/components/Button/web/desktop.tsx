import React from 'react'
import styled, {css} from 'styled-components'
import {addModifiers, sv} from '@ucheba/utils/helpers/styles'
import DefaultComponent, {defaultProps, Icon, Inner} from './_default'
import {IBlockProps} from '../_types'

const Button = styled(DefaultComponent)`
  && {
    ${Icon} {
      border: 3px solid white;
    }

    ${addModifiers({
      color: {
        primary: css`
          background-color: ${sv.colors.accent};

          ${Inner} {
            color: #fff;
          }
        `,
      },
    })}
  }
` as React.FC<IBlockProps>

Button.defaultProps = defaultProps

export default Button
