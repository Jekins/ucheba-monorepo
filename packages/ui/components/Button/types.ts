import { MouseEventHandler } from 'react'

export type TPropsButton = {
  as?: string | any
  type?: 'button' | 'submit'
  /** Ссылка, на которую ведет кнопка. */
  href?: string
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
  color?: 'blue' | 'gold' | 'emerald'
  icon?: JSX.Element | boolean
  onClick?: MouseEventHandler
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
