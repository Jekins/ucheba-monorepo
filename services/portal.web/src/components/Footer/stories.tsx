import React, { FC } from 'react'
import { text } from '@storybook/addon-knobs'
import Footer from './index'

export default {
  title: 'Portal/Components/Footer',
  component: Footer,
}

export const playground: FC = () => {
  return <Footer>{text('Текст', 'Footer')}</Footer>
}
