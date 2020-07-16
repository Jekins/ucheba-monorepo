import React, { FC } from 'react'
import { text } from '@storybook/addon-knobs'
import Dropdown from './index'

export default {
  title: 'UI/Components/Dropdown',
  component: Dropdown,
}

export const playground: FC = () => {
  return <Dropdown>{text('Текст', 'Dropdown')}</Dropdown>
}
