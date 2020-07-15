import React from 'react'

export interface IObjectDevicesComponents {
  touch: React.ComponentType
  desktop: React.ComponentType
}

export interface IPropsPage {
  isTouch: boolean
}

export interface IDevicePage {
  (props: IPropsPage, devicesComponents: IObjectDevicesComponents): JSX.Element
}
