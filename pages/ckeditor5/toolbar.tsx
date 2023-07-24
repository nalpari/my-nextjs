import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import Layout from '@/components/Layout'
import CkeditorHeader from '@/components/CkeditorHeader'

const Toolbar: NextPageWithLayout = () => {
  return (
    <>
      <h3>Toolbar</h3>
    </>
  )
}

Toolbar.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <CkeditorHeader />
      {page}
    </Layout>
  )
}

export default Toolbar
