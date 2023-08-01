import { ReactElement, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import dayjs from 'dayjs'
import axios from 'axios'

import { NextPageWithLayout } from '../_app'
import Layout from '@/components/Layout'
import Title from '@/components/Title'

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
  createdAt: string
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

const List: NextPageWithLayout = () => {
  const router = useRouter()
  const [posts, setPosts] = useState<Post[]>([])

  const getPosts = async () => {
    const result = await axios.get('/api/get-posts')
    console.log('result : ', result)
    setPosts(result.data)
  }

  useEffect(() => {
    getPosts()
    // fetch('/api/get-posts')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log('data : ', data)
    //     setPosts(data)
    //   })
  }, [])

  return (
    <>
      <div className="m-4">
        <Title title="Post List" />
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>User</th>
                <th>Categories</th>
                <th>CreatedAt</th>
              </tr>
            </thead>
            <tbody>
              {posts &&
                posts.map((post, index) => (
                  <tr key={post.id}>
                    <th>{index + 1}</th>
                    <td>
                      <Link href={`/post/${post.id}`}>{post.title}</Link>
                    </td>
                    <td>{post.author.name}</td>
                    <td>
                      {post.categories?.map((item) => (
                        <span key={item.id} className="mr-2">
                          {item.name}
                        </span>
                      ))}
                    </td>
                    <td>
                      {dayjs(post.createdAt).format('YYYY-MM-DD HH:mm:ss')}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-row-reverse py-4">
          <button
            className="btn btn-primary"
            onClick={() => router.push('/post/create')}
          >
            Add Post
          </button>
        </div>
      </div>
    </>
  )
}

List.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default List
