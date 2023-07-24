import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '@/components/Layout'
import Title from '@/components/Title'

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Title title="Home" />
      <div>test</div>
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page
