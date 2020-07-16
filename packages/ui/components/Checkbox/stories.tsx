import React, { FC } from 'react'
import { text } from '@storybook/addon-knobs'
import Checkbox from './index'

export default {
  title: 'UI/Components/Checkbox',
  component: Checkbox,
}

export const playground: FC = () => {
  return <Checkbox>{text('Текст', 'Checkbox')}</Checkbox>
}
