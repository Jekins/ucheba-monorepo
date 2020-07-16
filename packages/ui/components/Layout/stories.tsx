import React, { FC } from 'react'
import Layout from './index'

export default {
  title: 'UI/Components/Layout',
  component: Layout,
}

const Header: FC = () => <div>Шапка</div>
const Body: FC = () => <div>Тело</div>

export const playground: FC = () => {
  return <Layout header={<Header />} body={<Body />} />
}
