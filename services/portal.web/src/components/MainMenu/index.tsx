import React, { FC } from 'react'
import styled from 'styled-components'
import { TPropsMainMenu } from './types'

const Block = styled.div``

/** Главное меню под шапкой */
const MainMenu: FC<TPropsMainMenu> = ({ children, ...props }) => {
  return <Block {...props}>{children}</Block>
}

MainMenu.defaultProps = {}

export default MainMenu
