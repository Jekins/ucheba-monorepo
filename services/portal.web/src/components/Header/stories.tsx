import React, { FC } from 'react'
import { text } from '@storybook/addon-knobs'
import Header from './index'

export default {
  title: 'Portal/Components/Header',
  component: Header,
}

export const playground: FC = () => {
  return <Header>{text('Текст', 'Header')}</Header>
}
