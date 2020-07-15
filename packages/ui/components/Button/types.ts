import { ReactNode, MouseEventHandler } from 'react'
import { TColor, TSize } from '@ucheba/utils/types/styles'

export type TPropsButton = {
  className?: string
  children?: ReactNode
  type?: 'button' | 'submit'
  /** Ссылка, на которую ведет кнопка. */
  href?: string
  size?: TSize
  color?: TColor
  icon?: JSX.Element | boolean
  onClick?: MouseEventHandler
  as?: string | any
  disabled?: boolean
}

export interface IGetTagName {
  (props: { href?: string }): string
}

export interface IGetProps {
  (
    props: Pick<TPropsButton, 'type' | 'href' | 'as'>,
    // ref:
    //   | ((instance: HTMLElement | null) => void)
    //   | React.MutableRefObject<HTMLElement | null>,
    otherProps: object
  ): object
}
