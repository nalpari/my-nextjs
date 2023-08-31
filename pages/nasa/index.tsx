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

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await axios
    .get(
      'https://api.nasa.gov/planetary/apod?api_key=b8B6CITeZJhzttzri98034vQFYB7L54fc7ywxQak',
    )
    .then((res) => res.data)
  console.log(result)
  return {
    props: {
      nasaRepo: result,
    },
  }
}

function Nasa({ nasaRepo }: Repo) {
  useEffect(() => {
    console.log(nasaRepo)
  }, [])

  return (
    <>
      <div className="m-4">
        <Title title="NASA API" />
        <Image
          src={nasaRepo.url}
          alt={nasaRepo.title}
          width={500}
          height={500}
        />
      </div>
    </>
  )
}

Nasa.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Nasa
