import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import Layout from '@/components/Layout'
import CkeditorHeader from '@/components/CkeditorHeader'

const Upload: NextPageWithLayout = () => {
  return (
    <>
      <h3>Upload</h3>
    </>
  )
}

Upload.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <CkeditorHeader />
      {page}
    </Layout>
  )
}

export default Upload
