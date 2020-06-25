import * as React from 'react'
import { isMobile as isMobileUtil } from './core'
import { IDevicePage } from '../types/next'

export const getIDevicePage: IDevicePage = ({ isMobile }, devicesComponents) => {
  const PageMobile = devicesComponents.mobile
  const PageDesktop = devicesComponents.desktop

  return <>{isMobile ? <PageMobile /> : <PageDesktop />}</>
}

export const addIsMobileToPropsApp = async (ctx, Component): Promise<{}> => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps: { ...pageProps, isMobile: isMobileUtil(ctx) } }
}
