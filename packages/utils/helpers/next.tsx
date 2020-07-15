import * as React from 'react'
import { isTouch as isTouchUtil } from './core'
import { IDevicePage } from '../types/next'

export const getIDevicePage: IDevicePage = ({ isTouch }, devicesComponents) => {
  const PageTouch = devicesComponents.touch
  const PageDesktop = devicesComponents.desktop

  return <>{isTouch ? <PageTouch /> : <PageDesktop />}</>
}

export const addIsMobileToPropsApp = async (ctx, Component): Promise<{}> => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps: { ...pageProps, isTouch: isTouchUtil(ctx) } }
}
