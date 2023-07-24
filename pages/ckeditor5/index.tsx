import type { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'
import Layout from '@/components/Layout'
import CkeditorHeader from '@/components/CkeditorHeader'

const Basic: NextPageWithLayout = () => {
  return (
    <>
      <div>basic</div>
    </>
  )
}

Basic.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <CkeditorHeader />
      {page}
    </Layout>
  )
}

export default Basic
