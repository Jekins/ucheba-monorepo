import * as React from 'react'
import {AppContext} from 'next/app'
import {isMobile as isMobileUtil} from './core'

export interface ObjectDevicesComponents {
  mobile: React.ComponentType
  desktop: React.ComponentType
}

export interface PageProps {
  isMobile: boolean
}

interface DevicePage {
  (props: PageProps, devicesComponents: ObjectDevicesComponents): JSX.Element
}

export const getDevicePage: DevicePage = ({isMobile}, devicesComponents) => {
  const PageMobile = devicesComponents.mobile
  const PageDesktop = devicesComponents.desktop

  return <>{isMobile ? <PageMobile /> : <PageDesktop />}</>
}

export const addIsMobileToPropsApp = async (ctx, Component): Promise<{}> => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return {pageProps: {...pageProps, isMobile: isMobileUtil(ctx)}}
}
