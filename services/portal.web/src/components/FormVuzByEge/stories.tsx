import React, { FC } from 'react'
import { text } from '@storybook/addon-knobs'
import FormVuzByEge from './index'

export default {
  title: 'Portal/Components/FormVuzByEge',
  component: FormVuzByEge,
}

export const playground: FC = () => {
  return <FormVuzByEge>{text('Текст', 'FormVuzByEge')}</FormVuzByEge>
}
