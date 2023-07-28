import { useEffect, type ReactElement, useState } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '@/components/Layout'
import Title from '@/components/Title'

type Product = {
  id: string
  name: string
  created_at: string
}

type Category = {
  id: number
  name: string
}

type Profile = {
  id: number
  bio: string
}

type Post = {
  id: number
  createAt: string
  updatedAt: string
  title: string
  published: boolean
  authorId: number
  author: User
  categories: Category[]
}

type User = {
  id: number
  email: string
  name: string
  posts: Post[]
  profile: Profile
}

const Page: NextPageWithLayout = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [user, setUser] = useState<User>()
  const [posts, setPosts] = useState<Post[]>([])

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

  const handleAddCategory = async () => {
    const data = {
      name: 'Office',
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
    }

    await fetch('/api/add-category', options)
      .then((res) => res.json())
      .then((data) => {
        console.log('data : ', data)
      })
  }

  const handleGetUser = async () => {
    await fetch('/api/get-user?id=2')
      .then((res) => res.json())
      .then((data) => {
        console.log('data : ', data)
        setUser(data)
      })
  }

  const handleAddUser2 = async () => {
    const data = {
      email: 'yoo32767@gmail.com',
      name: 'yoo',
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
    }

    await fetch('/api/add-user2', options)
      .then((res) => res.json())
      .then((data) => {
        console.log('data : ', data)
      })
  }

  const handleAddProfile = async () => {
    const data = {
      bio: 'F',
      userId: 2,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
    }

    await fetch('/api/add-profile', options)
      .then((res) => res.json())
      .then((data) => {
        console.log('data : ', data)
      })
  }

  const handleAddPost = async () => {
    const data = {
      title: 'My first day at Prisma',
      authorId: 2,
      categories: {
        create: {
          name: 'Office',
        },
      },
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
    }

    await fetch('/api/add-post', options)
      .then((res) => res.json())
      .then((data) => {
        console.log('data : ', data)
      })
  }

  const handleGetPosts = async () => {
    await fetch('/api/get-posts')
      .then((res) => res.json())
      .then((data) => {
        console.log('data : ', data)
        setPosts(data)
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
        <button
          onClick={handleAddCategory}
          className="ml-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Add Category
        </button>
        <button
          onClick={handleGetUser}
          className="ml-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Get User
        </button>
        {user && (
          <div>
            {user.name} <span>{user.profile.bio}</span>
          </div>
        )}
        <div className="mt-2">
          <button
            onClick={handleAddUser2}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Add User2
          </button>
          <button
            onClick={handleAddProfile}
            className="ml-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Add Profile
          </button>
        </div>
        <div className="mt-2">
          <button
            onClick={handleAddPost}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Add Post
          </button>
          <button
            onClick={handleGetPosts}
            className="ml-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Get Posts
          </button>
        </div>
      </div>
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page
