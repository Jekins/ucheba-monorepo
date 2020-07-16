import React, { FC } from 'react'
import { text } from '@storybook/addon-knobs'
import Input from './index'

export default {
  title: 'UI/Components/Input',
  component: Input,
}

export const playground: FC = () => {
  return <Input>{text('Текст', 'Input')}</Input>
}
