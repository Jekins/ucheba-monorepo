import React, { FC } from 'react'
import { text } from '@storybook/addon-knobs'
import Logo from './index'

export default {
  title: 'UI/Components/Logo',
  component: Logo,
}

export const playground: FC = () => {
  return <Logo>{text('Текст', 'Logo')}</Logo>
}
