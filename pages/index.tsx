import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '@/components/Layout'
import Title from '@/components/Title'

const Page: NextPageWithLayout = () => {
  return (
    <>
      <div className="m-4">
        <Title title="Home" />
        <div>test</div>
      </div>
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page
