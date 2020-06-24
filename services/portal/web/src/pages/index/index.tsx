import {NextPage} from 'next'
import dynamic from 'next/dynamic'
import {getIDevicePage} from '@ucheba/utils/helpers/next'
import {IObjectDevicesComponents, IPageProps} from '@ucheba/utils/types/next'

const devicesComponents: IObjectDevicesComponents = {
  mobile: dynamic(() => import('./_mobile')),
  desktop: dynamic(() => import('./_desktop')),
}

const IndexPage: NextPage<IPageProps> = props => {
  return getIDevicePage(props, devicesComponents)
}

export default IndexPage
