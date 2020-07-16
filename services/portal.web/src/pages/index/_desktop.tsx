import { NextPage } from 'next'
import React, { FC } from 'react'
import Link from 'next/link'
import Button from '@ucheba/ui/components/Button'
import Layout from '@ucheba/ui/components/Layout'
import Header from '../../components/Header'

// это для теста
const Icon = ({ type }: { type: string }): JSX.Element => <span>{type}</span>

const desktop: NextPage = () => {
  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault()
    console.log('___', e)
  }

  const Body: FC = () => (
    <div>
      <h1>Desktop</h1>

      <Link href='/ege'>
        <a>ЕГЭ</a>
      </Link>

      <Button type='button' href='/' onClick={handleClick}>
        Button desk default with icon
      </Button>

      <Button color='emerald' size='large' icon={<Icon type='😊' />}>
        Button desk primary
      </Button>

      <Button color='gold' size='small'>
        Button desk primary
      </Button>
    </div>
  )

  return <Layout header={<Header>Header</Header>} body={<Body />} />
}

export default desktop
