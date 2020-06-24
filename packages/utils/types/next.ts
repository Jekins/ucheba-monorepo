import React from 'react'

export interface IObjectDevicesComponents {
  mobile: React.ComponentType
  desktop: React.ComponentType
}

export interface IPageProps {
  isMobile: boolean
}

export interface IDevicePage {
  (props: IPageProps, devicesComponents: IObjectDevicesComponents): JSX.Element
}
