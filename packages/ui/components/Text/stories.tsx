import React, { FC } from 'react'
import { text } from '@storybook/addon-knobs'
import Text from './index'

export default {
  title: 'UI/Components/Text',
  component: Text,
}

export const playground: FC = () => {
  return <Text>{text('Текст', 'Text')}</Text>
}
