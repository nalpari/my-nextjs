import { ReactElement, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import dayjs from 'dayjs'

import { NextPageWithLayout } from '@/pages/_app'
import Layout from '@/components/Layout'
import Title from '@/components/Title'
import axios from 'axios'

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

const PostId: NextPageWithLayout = () => {
  const [postTitle, setPostTitle] = useState<string>('')
  const [post, setPost] = useState<Post>()
  const router = useRouter()
  const { slug } = router.query

  const getPost = async () => {
    const result = await axios.get(`/api/get-post?id=${slug}`)
    console.log('result : ', result)
    setPost(result.data)
    setPostTitle(result.data.title)
  }

  useEffect(() => {
    getPost()
    // fetch(`/api/get-post?id=${slug}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log('data : ', data)
    //     setPost(data)
    //     setPostTitle(data.title)
    //   })
  }, [])

  const handleModifyPost = async () => {
    console.log('postTitle : ', postTitle)
    const data = {
      title: postTitle,
    }

    const options = {
      method: 'PUT',
      body: JSON.stringify(data),
    }

    await fetch(`/api/update-post?id=${slug}`, options)
      .then((res) => res.json())
      .then((data) => {
        console.log('data : ', data)
        router.push('/post')
      })
  }

  const handleDelPost = async () => {
    await fetch(`/api/delete-post?id=${slug}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then((data) => {
        console.log('data : ', data)
        router.push('/post')
      })
  }

  return (
    <>
      <div className="p-4">
        <Title title={`Post Detail: ${slug}`} />
        {post && (
          <>
            <div className="p-4">
              <span className="text-lg font-semibold mr-4">TITLE</span>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-accent w-full max-w-xs"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
              />
            </div>
            <div className="p-4">
              <span className="text-lg font-semibold mr-4">AUTHOR</span>
              {post.author.name}
            </div>
            <div className="p-4">
              <span className="text-lg font-semibold mr-4">CATEGORIES</span>
              {post.categories?.map((category) => (
                <span className="mr-4" key={category.id}>
                  {category.name}
                </span>
              ))}
            </div>
            <div className="p-4">
              <span className="text-lg font-semibold mr-4">CREATED AT</span>
              {dayjs(post.createdAt).format('YYYY-MM-DD HH:mm:ss')}
            </div>
            <div className="p-4">
              <button
                className="btn btn-primary mr-2"
                onClick={handleModifyPost}
              >
                Modify Post
              </button>
              <button className="btn mr-2" onClick={() => router.back()}>
                Back
              </button>
              <button className="btn btn-error mr-2" onClick={handleDelPost}>
                Delete Post
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}

PostId.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default PostId
