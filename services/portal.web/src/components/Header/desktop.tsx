import { FC } from 'react'
import styled from 'styled-components'
import { sv } from '@ucheba/utils/helpers/styles'
import DefaultHeader from './_default'
import { THeaderProps } from './_types'

const Header = styled(DefaultHeader)`
  && {
    background-color: ${sv.colors.accent};
  }
` as FC<THeaderProps>

export default Header
