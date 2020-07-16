import React, { FC } from 'react'
import { text } from '@storybook/addon-knobs'
import MainMenu from './index'

export default {
  title: 'Portal/Components/MainMenu',
  component: MainMenu,
}

export const playground: FC = () => {
  return <MainMenu>{text('Текст', 'MainMenu')}</MainMenu>
}
