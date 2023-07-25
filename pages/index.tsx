import { useEffect, type ReactElement, useState } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '@/components/Layout'
import Title from '@/components/Title'

type Product = {
  id: string
  name: string
  created_at: string
}

const Page: NextPageWithLayout = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('/api/get-products')
      .then((res) => res.json())
      .then((data) => {
        console.log('data : ', data)
        setProducts(data.products)
      })
  }, [])

  const handleAddUser = async () => {
    const data = {
      email: 'ariadne@prisma.io',
      name: 'Ariadne',
      posts: {
        create: [
          {
            title: 'My first day at Prisma',
            categories: {
              create: {
                name: 'Office',
              },
            },
          },
          {
            title: 'How to connect to a SQLite database',
            categories: {
              create: [{ name: 'Databases' }, { name: 'Tutorials' }],
            },
          },
        ],
      },
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
    }

    await fetch('/api/add-user', options)
      .then((res) => res.json())
      .then((data) => {
        console.log('data : ', data)
      })
  }

  return (
    <>
      <div className="m-4">
        <Title title="Home" />
        <div>test</div>
        {products &&
          products.map((item) => (
            <div key={item.id}>
              {item.name}
              <span className="pl-2">{item.created_at}</span>
            </div>
          ))}
        <button
          onClick={handleAddUser}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Add User
        </button>
      </div>
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page
