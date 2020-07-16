import React, { FC } from 'react'
import { text } from '@storybook/addon-knobs'
import Heading from './index'

export default {
  title: 'UI/Components/Heading',
  component: Heading,
}

export const playground: FC = () => {
  return <Heading>{text('Текст', 'Heading')}</Heading>
}
