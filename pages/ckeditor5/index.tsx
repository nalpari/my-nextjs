import type { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'
import Layout from '@/components/Layout'

const Basic: NextPageWithLayout = () => {
  return (
    <>
      <div>basic</div>
    </>
  )
}

Basic.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Basic
