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
      </div>
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page
