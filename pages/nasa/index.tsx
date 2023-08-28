import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'
import Layout from '@/components/Layout'
import Title from '@/components/Title'

const Nasa: NextPageWithLayout = () => {
  return (
    <>
      <div className="m-4">
        <Title title="Post List" />
      </div>
    </>
  )
}

Nasa.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Nasa
