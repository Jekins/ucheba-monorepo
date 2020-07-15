import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { getIDevicePage } from '@ucheba/utils/helpers/next'
import { IObjectDevicesComponents, IPropsPage } from '@ucheba/utils/types/next'

const devicesComponents: IObjectDevicesComponents = {
  touch: dynamic(() => import('./_touch')),
  desktop: dynamic(() => import('./_desktop')),
}

const EgePage: NextPage<IPropsPage> = props => {
  return getIDevicePage(props, devicesComponents)
}

export default EgePage
