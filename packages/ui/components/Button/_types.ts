import React, { ReactNode, MouseEventHandler } from 'react'
import { TColor, TSize } from '@ucheba/utils/types/styles'

export type TButtonProps = {
  className?: string
  children?: ReactNode
  type?: 'button' | 'submit'
  href?: string
  size?: TSize
  color?: TColor
  icon?: JSX.Element | boolean
  onClick?: MouseEventHandler
  as?: string | any
}

export interface IGetTagName {
  (props: { href?: string }): string
}

export interface IGetRightProps {
  (
    props: Pick<TButtonProps, 'type' | 'href' | 'as'>,
    ref:
      | ((instance: HTMLElement | null) => void)
      | React.MutableRefObject<HTMLElement | null>,
    otherProps: object
  ): object
}
