import { ReactElement, useEffect, useState } from 'react'
import { NextPageWithLayout } from '../_app'
import Layout from '@/components/Layout'
import Title from '@/components/Title'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Image from 'next/image'
import axios from 'axios'

type Repo = {
  copyright: string
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
}

const Nasa: NextPageWithLayout = () => {
  const [nasaRepo, setNasaRepo] = useState<Repo>()

  const getNasaData = async () => {
    const result = await axios.get('/api/get-nasa')
    console.log('result : ', result)
    setNasaRepo(result.data)
  }

  useEffect(() => {
    getNasaData()
  }, [])

  return (
    <>
      <div className="m-4">
        <Title title="NASA API" />
        {/* <Image src={repo.hdurl} alt={repo.title} width={500} height={500} /> */}
      </div>
    </>
  )
}

Nasa.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Nasa
