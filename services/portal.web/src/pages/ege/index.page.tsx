import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { getIDevicePage } from '@ucheba/utils/helpers/next'
import { IObjectDevicesComponents, IPropsPage } from '@ucheba/utils/helpers/next/types'

const devicesComponents: IObjectDevicesComponents = {
  desktop: dynamic(() => import('./_desktop')),
  touch: dynamic(() => import('./_touch')),
}

const EgePage: NextPage<IPropsPage> = props => {
  return getIDevicePage(props, devicesComponents)
}

export default EgePage
