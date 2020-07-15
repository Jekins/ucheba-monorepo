import React, { FC } from 'react'
import { select, text } from '@storybook/addon-knobs'
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
}

export const playground: FC = () => {
  const ColorValue = select(
    'color',
    {
      primary: 'primary',
      accent: 'accent',
      base: 'base',
    },
    'primary'
  )

  const SizeValue = select(
    'size',
    {
      xsmall: 'xsmall',
      small: 'small',
      medium: 'medium',
      large: 'large',
      xlarge: 'xlarge',
    },
    'medium'
  )

  return (
    <Button color={ColorValue} size={SizeValue}>
      {text('Текст кнопки', 'Button')}
    </Button>
  )
}

export const color: FC = () => (
  <div>
    <Button color='base'>base</Button>

    <Button color='primary'>primary</Button>

    <Button color='accent'>accent</Button>
  </div>
)

export const size: FC = () => (
  <div>
    <Button size='xsmall'>xsmall</Button>

    <Button size='small'>small</Button>

    <Button>medium</Button>

    <Button size='large'>large</Button>

    <Button size='xlarge'>xlarge</Button>
  </div>
)
